"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplicacao = exports.subtracao = exports.somar = exports.variavel = void 0;
exports.variavel = '1.0';
function somar(x, y) {
    return x + y;
}
exports.somar = somar;
function subtracao(x, y) {
    return x - y;
}
exports.subtracao = subtracao;
function multiplicacao(x, y) {
    return x * y;
}
exports.multiplicacao = multiplicacao;
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
