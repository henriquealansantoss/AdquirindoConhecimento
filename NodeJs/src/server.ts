import express, { Request, Response } from 'express';

//biblioteca que vem junto com o express
import path from 'path';

//importando o mustache
import mustache from 'mustache-express';

//importando as rotas que estão no routes
import mainroutes from './routes/index';

//importando lista de rotas do painel
import painelroutes from './routes/painel';

const server = express();

//configurando o mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
//usando
server.engine('mustache', mustache());

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


