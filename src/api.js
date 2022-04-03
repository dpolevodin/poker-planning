import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');
function subscribeToPoker(name) {
    socket.on('poker', (name) => console.log('test-client', name));
    socket.emit('subscribeToPoker', name);
}
export { subscribeToPoker };