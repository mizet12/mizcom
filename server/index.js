const http = require('http').createServer();
const mysql = require("mysql");
const { resolve } = require('path');

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
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
            io.emit('chatHistory', res[con].nick, res[con].wiadomosc);
            //console.log(res)
        })
    }
    socket.on('sendMessage', (name, text) => {
        console.log(name, text);
        db.query(`Insert INTO chat(nick, wiadomosc) Values ('${name}', '${text}');`)
        io.emit('sendMessage', name, text)
    });

    socket.on('userJoin', (name) => {
        console.log(`${name} dołączył`)
        io.emit('userJoin', name)
    });
});

http.listen(8080, () => console.log('sluchanie na http://localhost:8080'));