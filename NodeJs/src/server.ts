import express, { Request, Response } from 'express';

//biblioteca que vem junto com o express
import path from 'path';

//importando o mustache
import mustache from 'mustache-express';

//importando o dotenv
import dotenv from 'dotenv';

//importando as rotas que estão no routes
import mainroutes from './routes/index';

//importando lista de rotas do painel
import painelroutes from './routes/painel';

dotenv.config(); //acesso as variaveis de ambiente

const server = express();

//configurando o mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
//usando
server.engine('mustache', mustache());

//definindo o caminho até a pasta public 
server.use(express.static(path.join(__dirname, '../public')));

//(VIA POST) habilitando para que os dados que estão no body sejam acessiveis dentro da minha rota
server.use(express.urlencoded({ extended: true }));

// usando as rotas que estão no routes
server.use(mainroutes);
// server.use('/',mainroutes);

// usando as rotas que estão no painel
server.use('/painel', painelroutes);


// quando a pagina não existir
server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada!')
})

server.listen(process.env.PORT);


