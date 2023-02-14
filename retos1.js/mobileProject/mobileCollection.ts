
import { mobile} from "./mobile"


 export class MobileCollection{

    private mobiles: mobile []
    private totalPrice: number


    constructor(mobiles:mobile[]){

        this.mobiles = mobiles;
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





     
}