

export class Point{

    private x:number;
    private y:number;

    constructor(x:number, y:number){

        this.x = x;
        this.y = y;
    }


public setx(newx:number):void{

    this.x = newx;

    }

public getx():number{

    return this.x
    
    }

public sety(newy:number):void{

        this.y = newy;
    
        }
    
public gety():number{
    
        return this.y
        
        }
    
toString() {

    return "(" + this.getx() + "," + this.gety() + ")"
}       


distanceToOrigin():number{

   return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
   
      }
  

calculateDistance(anotherPoint:Point):number{

    const conx = this.x - anotherPoint.x;
      const cony = this.y - anotherPoint.y;
      return Math.sqrt(conx** 2 + cony ** 2);
    }

}      


  

  

     