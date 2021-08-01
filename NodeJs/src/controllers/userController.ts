import {Response, Request} from 'express';

export const envio = (req: Request, res: Response) => {

    // let nome: string = req.query.nome as string;
    // let ano: number = parseInt(req.query.ano as string);
    // let nomeNull: string = '';
    // let idade: number = 0;

    // if (nome === '' && !ano) {
    //     nomeNull = `Por gentileza informe seus dados`
    // } else {
    //     let arrayNome = nome.split('');
    //     nome = arrayNome[0].toUpperCase() + nome.substr(1, nome.length);

    //     let anoAtual: number = new Date().getFullYear();
    //     idade = anoAtual - ano;
    // }

    res.render('pages/envio');
};


export const envio_result = (req: Request, res: Response) => {

    let nome: string = req.body.nome as string;
    let ano: number = parseInt(req.body.ano as string);
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

    res.render('pages/envio', {
        nome,
        nomeNull,
        idade
    });
};

