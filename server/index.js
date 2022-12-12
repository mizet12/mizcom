const http = require('http').createServer();
const mysql = require("mysql");
const { resolve } = require('path');

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    people = {};
    //console.log('ktoś się połączył');

    const db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "mizcom"
    });
    
    db.connect((err) => {
        if (err) { throw err; }
        //console.log("DB connection OK");
    });

    var con = 0;
    socket.on('userJoin', (name) => {
        people[name] = socket.id;
        db.query("Select * from chat", (err, result) => {
            if(err){throw err;}
            while(con < result.length){
                    History(con)
                con++;
            } 
        }); 
        function History(con){
            db.query("Select nick, wiadomosc From `chat`", (erro, res) => {
                if(erro){throw erro;}
                io.to(socket.id).emit('chatHistory', res[con].nick, res[con].wiadomosc);
                //console.log(res)
            })
        }
        console.log(`${name} dołączył`)
        db.query(`Insert Into chat(nick, wiadomosc) Values ('${name}', 'dołączył na chat')`)
        io.emit('userJoin', name)
    });
    
    socket.on('sendMessage', (name, text) => {
        console.log(name, text);
        
        db.query(`Insert INTO chat(nick, wiadomosc) Values ('${name}', '${text}');`)
        io.emit('sendMessage', name, text)
    });

    
});

http.listen(8080, () => console.log('sluchanie na http://localhost:8080'));