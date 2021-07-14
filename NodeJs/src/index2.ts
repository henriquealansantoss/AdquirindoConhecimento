import validator from 'validator';


let ip = '192.0.1.2'
console.log(validator.isIP(ip));
// console.log(validator.isEmail('henriquealansantoss@gmail.com'))
console.assert(validator.isIP(ip));


let nome: string = 'Henrique Santos';



// testando o nodemon
if (validator.isLowercase(nome)) {
    console.log(`minusculo`)
} else {
    console.log(`maiusculo`)
}
