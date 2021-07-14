"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
let ip = '192.0.1.2';
console.log(validator_1.default.isIP(ip));
// console.log(validator.isEmail('henriquealansantoss@gmail.com'))
console.assert(validator_1.default.isIP(ip));
let nome = 'henrique';
// testando o nodemon
if (validator_1.default.isLowercase(nome)) {
    console.log(`minusculo`);
}
else {
    console.log(`maiusculo`);
}
