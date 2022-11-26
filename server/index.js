const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    console.log('ktoś się połączył');
    
    socket.on('userJoin', (name) => {
        console.log(`${name} dołączył`)
        io.emit('userJoin', name)
    });
    socket.on('sendMessage', (name, text) => {
        console.log(name, text);
        io.emit('sendMessage', name, text)
    });
});

http.listen(8080, () => console.log('sluchanie na http://localhost:8080'));