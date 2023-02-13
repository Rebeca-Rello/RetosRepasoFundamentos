"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
console.log('***********function evenNumbers*********');
function evenNumbers(num) {
    for (var i = 0; i <= num; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}
evenNumbers(20);
console.log('***********function myRevert*********');
function myRevert(myArr) {
    for (var i = myArr.length - 1; i >= 0; i--) {
        myArr.push(myArr[i]);
        console.log(myArr[i]);
    }
}
myRevert([1, 2, 3, 4, 5]);
console.log('***********function isRainbow**********');
var colors = ["red", "orange", "yellow", "green", "indigo", "blue", "violet", "black", "white", "brown"];
function isRainbow(colors) {
    for (var i = 0; i < colors.length; i++) {
        if (colors[i] == "red" || colors[i] == "orange" || colors[i] == "yellow" || colors[i] == "green" ||
            colors[i] == "indigo" || colors[i] == "violet" || colors[i] == "blue") {
            console.log("El color esta en el arcoiris");
        }
        else
            (console.log("El color no esta en el arcoiris"));
    }
}
isRainbow(["brown"]);
console.log('***********function add************');
function add(myWords) {
    var array = 0;
    for (var i = 0; i < myWords.length; i++) {
        var suma = myWords[i].length;
        array += suma;
    }
    return array;
}
exports.add = add;
console.log(add(["Pablo", "Maria", "Marta"]));
