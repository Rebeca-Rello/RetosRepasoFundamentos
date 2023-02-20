

 import { Point } from "./point"


 export class Triangle{


    private vertex1: Point
    private vertex2: Point
    private vertex3: Point

    constructor(vertex1: Point,vertex2: Point, vertex3: Point ){

           this.vertex1 = vertex1;
           this.vertex2 = vertex2;
           this.vertex3 = vertex3;
    }

    
public setvertex1(newvertex1:Point):void{

    this.vertex1 = newvertex1;

    }

public getvertex1():Point{

    return this.vertex1
    
    }

public setvertex2(newvertex2:Point):void{

    this.vertex2 = newvertex2;

    }

public getvertex2():Point{

    return this.vertex2
    
    }
    
public setvertex3(newvertex3:Point):void{

    this.vertex3 = newvertex3;

    }

public getvertex3():Point{

    return this.vertex3
    
    }


calculateLengthSides() : number[]{

    let length12 = this.vertex1.calculateDistance(this.vertex2);
    let length13 = this.vertex1.calculateDistance(this.vertex3);
    let length23 = this.vertex2.calculateDistance(this.vertex3);
    return [length12, length13, length23];
  }


}


