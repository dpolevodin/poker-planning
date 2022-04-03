const io = require('socket.io')({
    cors: {
        origin: "http://localhost:3000",
    }
});

io.on('connection', (client) => {
    client.on('subscribeToPoker', (name) => {
        console.log(`${name} is subscribing to poker`);
    });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
