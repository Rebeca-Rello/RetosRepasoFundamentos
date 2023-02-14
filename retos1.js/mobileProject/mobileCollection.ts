
import { Mobile} from "./mobile"


 export class MobileCollection{

    private mobiles: Mobile []
    private totalPrice: number
    

    constructor(mobiles:Mobile[]){

        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation()

    } 


    public setMobiles (newmobiles:Mobile[]):void{

     this.mobiles = newmobiles;

     }

    public getMobiles():Mobile[]{

        return this.mobiles

     }

    public setTotalPrice(newtotalPrice: number):void{

        this.totalPrice = newtotalPrice;
   
        }
   
    public getTotalPrice():number{
   
        return this.totalPrice
   
        }

    // Refactorizar el código para hacerlo con el método reduce de la clase array
    // private totalPriceCalculation():number{

    //     let coste:number = 0;

    //     for (let i=0; i <this.mobiles.length; i++)
    //     {
    //       coste += this.mobiles[i].getprice()
    //     }

    //     return coste
    // }

    private totalPriceCalculation():number{

        return this.mobiles.reduce((total, mobile)=>total + mobile.getprice(),0)
    }

    public printCollection():void{

        for(let mobile of this.mobiles){

            console.log(mobile.toString());
        }      
       
        console.log("Price overall: " + this.getTotalPrice());
        }  

    }

     


