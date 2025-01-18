import express from 'express';
import cors from 'cors';
import './socket';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
}))

routes(app)

app.listen(3000, () => {
    console.log('servidor abriu na porta 8000')
})