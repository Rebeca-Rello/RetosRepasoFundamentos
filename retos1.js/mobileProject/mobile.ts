

export class Mobile{

private name: string
private trademark: string
private model: string
private color: string
private price: number

constructor(name:string, trademark:string, model:string, color: string, price:number){

        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;

}


public setName(newname:string):void{

 this.name = newname;
 }

public getName():string{

    return this.name

 }


 public setTrademark(newtrademark:string):void{

    this.trademark = newtrademark;
    }
   
public getTrademark():string{
   
       return this.trademark
   
}

   
public setModel(newmodel:string):void{

    this.model = newmodel;
    }
   
public getModel():string{
   
       return this.model
   
}


public setColor(newcolor:string):void{

        this.color= newcolor;
 }
       
public getColor():string{
       
        return this.color
       
}
    

public setPrice(newprice:number):void{

    this.price= newprice;
}
   
public getPrice():number{
   
    return this.price
   
}
public toString():string{


       
    return "The characteristics of the mobile" +" "+ this.name +" "+ 
    "are:" + "\n" + "Name:" + this.name + "\n" + "Trademark:" +
    this.trademark + "\n "+ "model:" + this.model  + "\n" + "Color:" +
     this.color + "\n" + "Price:" + this.price


  
 }


}




