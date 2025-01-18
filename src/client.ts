import { io } from 'socket.io-client';

const socket = io("ws://localhost:3001/", {});
console.log('testei')

socket.on("connect", () => {
    console.log("Conectado ao servidor WebSocket", socket.id);
});

socket.on("disconnect", () => {
    console.log("Desconectado do servidor WebSocket", socket.id);
});
