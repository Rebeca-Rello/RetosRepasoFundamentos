
import {MobileCollection} from "./mobileCollection"
import { mobile } from "./mobile"



let mobile1 = new mobile ("Note", "Huawei", "i20", "black",1000);
let mobile2 = new mobile ("Notebook", "Samsung", "40", "pink",1500);
let mobile3 = new mobile ("Plus", "iPhone", "i15", "silver",2000);
let mobile4 = new mobile ("A", "OPPO", "B20", "blue", 1000);


let mobiles = [mobile1, mobile2, mobile3, mobile4];

let myCollection = new MobileCollection (mobiles)



console.log(myCollection.getMobiles());

console.log('***********getPrice**********');
console.log(myCollection.getTotalPrice());


console.log(myCollection.printCollection());



