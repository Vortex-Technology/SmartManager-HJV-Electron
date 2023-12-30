import { io } from 'socket.io-client';

export const socket = io('http://localhost:3005');

socket.on('connect', () => {
  console.log('Conectado ao servidor de socket');
  socket.emit('ping');
});

socket.on('pong', () => {
  console.log('pong');
});

socket.on('error', (error) => {
  throw error;
});
