import express, { Request, Response, NextFunction } from 'express';
import usersRoute from './routes/users.route';
import statusRoute from './routes/status.route';

const app = express();

//Congfiguração da Aplicação
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//configuração das rotas do projeto
app.use(usersRoute);
app.use(statusRoute);

//Configuração da porta referente a aplicação no localhost
app.listen(3000, () => {
  console.log('Aplicação executando na porta 3000!')
});

