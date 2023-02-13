

export class mobile{

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


public setname(newname:string):void{

 this.name = newname;
 }

public getname():string{

    return this.name

 }


 public settrademark(newtrademark:string):void{

    this.trademark = newtrademark;
    }
   
public gettrademark():string{
   
       return this.trademark
   
}

   
public setmodel(newmodel:string):void{

    this.model = newmodel;
    }
   
public getmodel():string{
   
       return this.model
   
}


public setcolor(newcolor:string):void{

        this.color= newcolor;
 }
       
public getcolor():string{
       
        return this.color
       
}
    

public setprice(newprice:number):void{

    this.price= newprice;
}
   
public getprice():number{
   
    return this.price
   
}


}