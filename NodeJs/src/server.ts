import express, { Request, Response } from 'express';

//importando as rotas que estão no routes
import mainroutes from './routes/index';

//importando lista de rotas do painel
import painelroutes from './routes/painel';

const server = express();

// usando as rotas que estão no routes
server.use(mainroutes);
// server.use('/',mainroutes);

// usando as rotas que estão no painel
server.use('/painel', painelroutes);

server.listen(80);