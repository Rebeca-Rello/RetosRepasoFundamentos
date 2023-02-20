

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

calculateQuadrant(x: number, y: number):number{

   
        if (x === 0 || y === 0) {
          return 0;
        } else if (x > 0 && y > 0) {
          return 1;
        } else if (x < 0 && y > 0) {
          return 2;
        } else if (x < 0 && y < 0) {
          return 3;
        } else {
          return 4;
        }
      
}

calculateNearest(points : Point[]) : Point{

        
        let pointcercano = points[0];
      
        for (let i = 1; i < points.length; i++) {
            if(this.calculateDistance(points[i]) < this.calculateDistance(pointcercano)){
                pointcercano = points[i]
            }
              
      }
        return pointcercano;

}



}

  

  

     