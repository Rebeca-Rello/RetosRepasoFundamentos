import { Point } from "./point"



let point1 = new Point (20,15);

console.log(point1.getx());
console.log(point1.gety());
console.log(point1.toString());


console.log('*********DISTANCE TO ORIGIN******');


console.log(point1.distanceToOrigin()); 


console.log('*********DISTANCE TO ORIGIN******');

const p1 = new Point(1, 2);
const p2 = new Point(3, 4);


console.log(p1.calculateDistance(p2)); 



