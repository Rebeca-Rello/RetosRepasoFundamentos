

import { Mobile} from "./mobile";


let mobile1 = new Mobile ("Note", "Huawei", "i20", "black",1000);
let mobile2 = new Mobile ("Notebook", "Samsung", "40", "pink",1500);
let mobile3 = new Mobile ("Plus", "iPhone", "i15", "silver",2000);


mobile1.toString()
console.log(mobile1.toString());

let myMobiles=[mobile1, mobile2,mobile3];

for (let i=0; i<myMobiles.length;i++ ) {

    
    console.log( myMobiles[i].toString());
      
 }

for (let mobile of myMobiles)
{
    console.log(mobile.toString());
}

myMobiles.forEach( mobile => console.log(mobile.toString()));
 





 