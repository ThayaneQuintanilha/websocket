import { Server } from 'socket.io';

export const io = new Server(3001, {
    cors: {
        origin: '*',
    },
});

console.log('Servidor WebSocket está escutando na porta 3001');

io.on('connect', (socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on('disconnect', () => {
        console.log(`Client disconnected: ${socket.id}`);
    });

    socket.on('message', (mensagem) => {
        console.log('Mensagem', mensagem)
    })
});
