
import {MobileCollection} from "./mobileCollection"
import { Mobile } from "./mobile"



let mobile1 = new Mobile ("Note", "Huawei", "i20", "black",1000);
let mobile2 = new Mobile ("Notebook", "Samsung", "40", "pink",1500);
let mobile3 = new Mobile ("Plus", "iPhone", "i15", "silver",2000);
let mobile4 = new Mobile ("A", "OPPO", "B20", "blue", 1000);


let mobiles = [mobile1, mobile2, mobile3, mobile4];

let myCollection = new MobileCollection (mobiles)



console.log(myCollection.getMobiles());

console.log('***********getPrice**********');
console.log(myCollection.getTotalPrice());


console.log(myCollection.printCollection());




