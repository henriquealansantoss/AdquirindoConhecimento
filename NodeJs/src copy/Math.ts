export let variavel: string = '1.0';

export function somar(x: number, y: number) {
    return x + y;
}

export function subtracao(x: number, y: number) {
    return x - y;
}

export function multiplicacao(x: number, y: number) {
    return x * y;
}

// 3. caso queira exportar tudo de forma padrão
// export default {
//     somar,
//     subtracao,
//     multiplicacao,
//     variavel
// };



// forma antiga, porém ainda usada em alguns projetos ES5
// module.exports.somar = somar;
// module.exports.subtracao = subtracao;
// module.exports.multiplicacao = multiplicacao;