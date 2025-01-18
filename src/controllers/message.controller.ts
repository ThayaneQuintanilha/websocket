import { io } from '../index';

export const Message = (req, res) => {
  const { message } = req.body;

  io.emit('message', { text: message });

  return res.status(200).json({ message });
};
