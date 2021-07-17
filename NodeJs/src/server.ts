import express, { Request, Response } from 'express';

//importando as rotas que estão no routes
import mainroutes from './routes/index';

//biblioteca que vem junto com o express
import path from 'path';

//importando lista de rotas do painel
import painelroutes from './routes/painel';

const server = express();

//definindo o caminho até a pasta public 
server.use(express.static(path.join(__dirname, '../public')));


// usando as rotas que estão no routes
server.use(mainroutes);
// server.use('/',mainroutes);

// usando as rotas que estão no painel
server.use('/painel', painelroutes);


// quando a pagina não existir
server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada!')
})

server.listen(80);


