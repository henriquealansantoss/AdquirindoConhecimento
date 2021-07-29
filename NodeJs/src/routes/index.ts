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
    res.render('pages/home', {
        user: name,
        teste,
        showAge,
        idade,
        showWelcome: true,
        products: [
            { title: 'Produto X', price: 10 },
            { title: 'Produto Y', price: 15 },
            { title: 'Produto W', price: 20 }
        ],
        lista: [
            'teste1',
            'teste2',
            'teste3'
        ],
        lista2: [
            // 'teste1',
            // 'teste2',
            // 'teste3'
        ]
    });

});

router.get('/contato', (req: Request, res: Response) => {
    res.render('pages/contato', {

    })
});

router.get('/sobre', (req: Request, res: Response) => {
    res.render('pages/sobre', {

    })
});

router.get('/envioget', (req: Request, res: Response) => {

    let nome: string = req.query.nome as string;
    let ano: number = parseInt(req.query.ano as string);
    let nomeNull: string = '';
    let idade: number = 0;

    if (nome === '' && !ano) {
        nomeNull = `Por gentileza informe seus dados`
    } else {
        let arrayNome = nome.split('');
        nome = arrayNome[0].toUpperCase() + nome.substr(1, nome.length);

        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - ano;
    }

    res.render('pages/envioget', {
        nome,
        nomeNull,
        idade
    });
})


// Após configurar o router todo, tenho que exporta-lo
export default router;