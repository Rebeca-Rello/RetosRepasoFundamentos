// let sign:String =  "";
// function zodiac( day : number, month : number ){
//     if( ( day >= 21 && month == 3) || (day <= 19 && month == 4 ) ){
//         sign = ("Aries");
//     }
//     else if( ( day >= 20 && month == 4) || (day <= 20 && month == 5 ) ){
//         sign = ("Tauro");
//     }
//    else  if( ( day >= 21 && month == 5) || (day <= 20 && month == 6) ){
//         sign = ("Géminis");
//     }
//    else if( ( day >= 21 && month == 6) || (day <= 20 && month == 7 ) ){
//         sign = ("Cancer");
//     }
//     else if( ( day >= 21 && month == 7) || (day <= 22 && month == 8) ){
//         sign = ("Leo");
//     }
//     else if( ( day >= 23 && month == 8) || (day <= 23 && month == 9 ) ){
//         sign =  ("Virgo");
//     }
//     else if( ( day >= 24 && month == 9) || (day <= 23 && month == 10 ) ){
//         sign = ("Libra");
//     }
//     else if( ( day >= 24 && month == 10) || (day <= 22 && month == 11 ) ){
//         sign =  ("Escorpio");
//     }
//     else if( ( day >= 24 && month == 11 ) || (day <= 22 && month == 12 ) ){
//         sign = ("Sagitario");
//     }
//     else if( ( day >= 24 && month == 12 ) || (day <= 22 && month == 1 ) ){
//         sign = ("Capricornio");
//     }
//     else if( ( day >= 23 && month == 1 ) || (day <= 22 && month == 2 ) ){
//         sign =  ("Acuario");
//     }
//     else if( ( day >= 21 && month == 2 ) || (day <= 22 && month == 3) ){
//         sign =  ("Piscis");
//     }
//     return sign
// }
// sign = zodiac(1,10)
// console.log(sign);
// console.log('************IMPRIMIR CONTINENTE********');
// function continent (country:string):void{
//     if(country == "Corea del Sur" || country == "China" || country == "Japon" ){
//         console.log("Asia");
//     }
//     else if(country == "Colombia" || country == "Peru" || country == "Chile"){
//         console.log("America");
//     }
//     else if(country == "Marruecos" || country == "Ghana" || country == "Nigeria"){
//         console.log("Africa");
//     }
//     else if(country == "Irlanda" || country == "Alemania" || country == "Francia"){
//         console.log("Europa");
//     }
//     else if(country == "Australia" || country == "Nueva Zelanda" || country == "Fiyi"){
//         console.log("Oceania");
//     }
// }
// continent("Irlanda");
console.log('***********function isEven*************');
function isEven(number) {
    if (number % 2 == 0) {
        console.log("El numero es par");
    }
    else {
        console.log("El numero es impar");
    }
}
isEven(8);
