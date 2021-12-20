// A Classe (Conjuto de Atributos e Metódos - ECMAScript).
class celular {

    constructor() {

        this.cor = "prata";

    }

    ligar() {

        console.log("uma ligação");
        return "ligando";

    }


}

let objeto = new celular();

console.log(objeto.ligar());


// A Classe (Conjuto de Atributos e Metódos - JS Puro).
/*let celular = function () {

    this.cor = "prata";

    this.ligar = function () {

        console.log("uma ligação");
        return "ligando";

    }


}

let objeto = new celular();

console.log(objeto.ligar());*/



// Arrays.(Sempre começa na posição 0)
/*//let carros = ["Palio", "Gol", "Uno", "Marea", "Corolla", "S10", "Ranger", "Jeep"];
let carros = ["Palio", "Gol", "Uno", "Marea", "Corolla", 10, true, new Date()];


carros.forEach(function (value, index) {

    console.log(index, value);

});

//console.log(carros[7]);
//console.log(carros[7].getFullYear());*/


// Events (Date - TIMESTAMP).
/* //let agora = Date.now();
let agora = new Date();


//console.log(agora);
//console.log(agora.getDate());
//console.log(agora.getFullYear());
//console.log(agora.getMonth());
console.log(agora.toLocaleDateString("pt-Br"));*/


// Events (Click - Page).
/*document.addEventListener('click', event => {

    console.log("click");

});*/


// Events (Focus - Window).
/*window.addEventListener('focus', event => {

    console.log("focus");

});*/


//Function.
/*function somar(x1, x2) {

    return x1 + x2;

}

let resultado = somar(1, 2);

console.log(resultado);*/


//Function. Função calc.
/*function calc(x1, x2, operator) {

    return eval(`${x1} ${operator} ${x2}`);

}

//let resultado = calc(1, 2, "-");
//let resultado = calc(1, 2, "+");
//let resultado = calc(1, 2, "*");
//let resultado = calc(1, 2, "/");

console.log(resultado);*/

//Function. Função Anônima.
/*(function (x1, x2, operator) {

    return eval(`${x1} ${operator} ${x2}`);

}(1, 2, "/"));

//let resultado = calc(1, 2, "-");
//let resultado = calc(1, 2, "+");
//let resultado = calc(1, 2, "*");
//let resultado = calc(1, 2, "/");

console.log(resultado);*/

//Arrow Function.
/*let calc = (x1, x2, operator) => {

    return eval(`${x1} ${operator} ${x2}`);

}

//let resultado = calc(1, 2, "-");
//let resultado = calc(1, 2, "+");
//let resultado = calc(1, 2, "*");
//let resultado = calc(1, 2, "/");

console.log(resultado);*/