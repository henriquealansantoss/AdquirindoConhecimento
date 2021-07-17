import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    // pegar os produtos do banco de dados
    // organizar as informações desses produtos
    // envia para o template engine 

    // res.send('Olá Mundo!')
    res.render('home');
});

router.get('/contato', (req: Request, res: Response) => {
    res.send('Formulário de contato')
});

router.get('/sobre', (req: Request, res: Response) => {
    res.send('Informações sobre a empresa')
});


// Após configurar o router todo, tenho que exporta-lo
export default router;