import express from 'express'
import cors from 'cors'
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json()); // tem que vir antes da rota, é uma sequencia a leitura
app.use(routes);

app.listen(3333, () => {
    console.log('HTTP server running!');
});
