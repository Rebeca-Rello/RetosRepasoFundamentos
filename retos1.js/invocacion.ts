
import  {add} from "./buclesFor"
// let ad = require('./buclesFor');

import { isEven } from "./condicionales"

console.log('*********INVOCACION*********');


let array1 = ["Casa", "Coche", "Ciudad", "Cesta"];
let array2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let array3 = ["Venezuela", "Veneno", "Voltaje"];

console.log("************ ADD STRING ");
console.log(add(array1));
console.log(add(array2));
console.log(add(array3));


function invoca (arr: string[]):void{

    let res = add(arr);

    return isEven(res)
}
console.log("***************INVOCA*************");
invoca(array2)


let resultado = add(array2);
isEven(resultado)
