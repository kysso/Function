/*function exemplo()  { console.log("ele gosta")}  exemplo()*/

/*const calc = (operator, [num1, num2] = [2, 3]) => "Resultado: " + eval(`${num1} ${operator} ${num2}`);
calc('*')*/

/*let calc = (num1, num2, operator) => "Resultado: " + eval(`${num1} ${operator} ${num2}`);
calc(4,5,'*')

console.log(`${calc}`)*/

let multi = (x, y) => x * y;

console.log(multi(2, 3));
// resultado: 6


//função parametro
function precos(mouse, teclado) {
    let totalitens = mouse + teclado
    console.log("novo preço: " + totalitens)
}

//função parametro e retorno
function soma(x, y) {
    return console.log(x + y)
}
soma()


precos(35, 100)
