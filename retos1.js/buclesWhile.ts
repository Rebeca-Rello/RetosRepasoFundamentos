
console.log('********function hasEven******');


let array = [1,2,3,4,5,];
let par;
let i =0;

function hasEven(myNums:number[]){

let i:number =0;
while ((i<myNums.length) && (myNums[i]%2 !== 0))
{
    i++
}
if(i<myNums.length){

        console.log("Hay un numero par")
    }

    else
{console.log(("No hay numero par"))}
}

hasEven(array)


console.log('********function startWithM******');


// let resultado:boolean = true;

// let i =0;

// function startWithM(myNames:string[]):boolean{

// while(i<myNames.length && resultado == true){

//     if(myNames[i].charAt(0)!="M"){

//         resultado = false;
//     }
//     i++
// }
// return resultado
// }

// console.log(startWithM(["Mario", "Maria", "Monica", "Miguel", "Roberto"]));