
import { mobile} from "./mobile"


 export class MobileCollection{

    private mobiles: mobile []
    private totalPrice: number
    

    constructor(mobiles:mobile[]){

        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation()

    } 


    public setMobiles (newmobiles:mobile[]):void{

     this.mobiles = newmobiles;

     }

    public getMobiles():mobile[]{

        return this.mobiles

     }

    public setTotalPrice(newtotalPrice: number):void{

        this.totalPrice = newtotalPrice;
   
        }
   
    public getTotalPrice():number{
   
        return this.totalPrice
   
        }

    private totalPriceCalculation():number{

        let coste:number = 0;

        for (let i=0; i <this.mobiles.length; i++)
        {
          coste += this.mobiles[i].getprice()
        }

        return coste
    }



    public printCollection():void{

        for(let mobile of this.mobiles){

            console.log(mobile.toString());
        }      
       
        console.log("Price overall: " + this.getTotalPrice());
        }  

    }

     


