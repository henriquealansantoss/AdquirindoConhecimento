import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Olá Mundo!')
});

router.get('/contato', (req: Request, res: Response) => {
    res.send('Formulário de contato')
});

router.get('/sobre', (req: Request, res: Response) => {
    res.send('Informações sobre a empresa')
});


// Após configurar o router todo, tenho que exporta-lo
export default router;