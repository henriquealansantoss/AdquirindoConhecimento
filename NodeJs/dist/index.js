"use strict";
// let nome: string = 'Henrique';
// let idade: number = 30;
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(`Meu nome é ${nome} e eu tenho ${idade} anos`);
// formas de usar import e o export
// forma antiga, porém ainda usada em alguns projetos ES5
// const Matematica = require("./Math")
const Math_1 = require("./Math");
let n1 = 20;
let n2 = 40;
console.log(`Soma: ${Math_1.somar(n1, n2)}`);
console.log(`Subtração: ${Math_1.subtracao(n1, n2)}`);
console.log(`Multiplicação: ${Math_1.multiplicacao(n1, n2)}`);
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
