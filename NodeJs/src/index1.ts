// let nome: string = 'Henrique';
// let idade: number = 30;

// console.log(`Meu nome é ${nome} e eu tenho ${idade} anos`);



// formas de usar import e o export

// forma antiga, porém ainda usada em alguns projetos ES5
// const Matematica = require("./Math")


import { somar, subtracao, multiplicacao } from './Math';


let n1: number = 20;
let n2: number = 40;

console.log(`Soma: ${somar(n1, n2)}`);
console.log(`Subtração: ${subtracao(n1, n2)}`);
console.log(`Multiplicação: ${multiplicacao(n1, n2)}`);

// 3. caso queira importar tudo de forma padrão
// import Matematica from './Math';
// assim tenho que usar como um objeto
// console.log(`Soma: ${Matematica.somar(n1, n2)}`);
// console.log(`Subtração: ${Matematica.subtracao(n1, n2)}`);
// console.log(`Multiplicação: ${Matematica.multiplicacao(n1, n2)}`);


//importando tudo 
// import * as Matematica from './Math';


// let n1: number = 20;
// let n2: number = 40;

// usando o que foi exportado
// Matematica.somar(n1,n2);


//forma usando objetos
// console.log(`Soma: ${Matematica.somar(n1, n2)}`);
// console.log(`Subtração: ${Matematica.subtracao(n1, n2)}`);
// console.log(`Multiplicação: ${Matematica.multiplicacao(n1, n2)}`);