import express, { Request, Response } from 'express';

const server = express();

server.get('/', (req: Request, res: Response) => {
    res.send('Olá Mundo!')
})


// dinamica
server.get('/noticia/:slug', (req: Request, res: Response) => {
    let slug: string = req.params.slug;
    res.send(`Noticia ${slug}`)
})

server.get('/voo/:origem-:destino', (req: Request, res: Response) => {
    // let origem = req.params.origem;
    // let destino = req.params.destino;

    let { origem, destino } = req.params;

    res.send(`${origem} até ${destino}`);
})



server.listen(80);