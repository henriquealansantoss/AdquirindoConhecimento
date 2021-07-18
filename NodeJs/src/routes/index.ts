import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    // pegar os produtos do banco de dados
    // organizar as informações desses produtos
    // envia para o template engine 

    // res.send('Olá Mundo!')

    let idade: number = 29;
    let showAge: boolean = false;
    (idade < 18) ? showAge = true : showAge = false


    let teste = {
        profissao: "ProgramadorJr",
        exp: '1 ano'
    }

    let name: string = "Henrique"
    res.render('home', {
        user: name,
        teste,
        showAge,
        idade
    });



});

router.get('/contato', (req: Request, res: Response) => {
    res.send('Formulário de contato')
});

router.get('/sobre', (req: Request, res: Response) => {
    res.send('Informações sobre a empresa')
});


// Após configurar o router todo, tenho que exporta-lo
export default router;