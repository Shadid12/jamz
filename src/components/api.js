
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3002');

function subscribeToTimer() {
  socket.emit('message', 'hello worlds')
}

export {
  subscribeToTimer,
};