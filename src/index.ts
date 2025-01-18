import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import { routes } from './routes';

const app = express();
const httpServer = http.createServer(app);

export const io = new Server(httpServer, {
  cors: {
    origin: ['http://localhost:3000'],
  },
});

io.on('connect', (socket) => {
  console.log(`Client connected: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`);
  });

  socket.on('message', (mensagem) => {
    console.log('recebi amensagem', mensagem);
    io.emit('message', mensagem);
  });
});

app.use(express.json());

app.use(
  cors({
    origin: ['http://localhost:3008', 'http://localhost:3000', 'http://localhost:3001'],
  })
);

routes(app);

const PORT = 3008;
httpServer.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
