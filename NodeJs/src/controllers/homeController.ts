import {Request, Response} from 'express';

import { Product } from '../models/Product';

export const home = (req: Request, res: Response) => {
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


    let list = Product.getAll();
    let expensiveList = Product.getPriceAfter(12);

    res.render('pages/home', {
        user: name,
        teste,
        showAge,
        idade,
        showWelcome: true,
        products: list,
        expensiveList,
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

}