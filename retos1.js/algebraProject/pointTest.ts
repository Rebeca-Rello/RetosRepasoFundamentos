import { Point } from "./point"



let point1 = new Point (4,6);
let point2 = new Point (4,8);
let point3 = new Point (5,6);
let point4 = new Point (2,8);

console.log(point1.getx());
console.log(point1.gety());
console.log(point1.toString());


console.log('*********DISTANCE TO ORIGIN******');


console.log(point1.distanceToOrigin()); 


console.log('*********DISTANCE TO ORIGIN******');

const p1 = new Point(1, 2);
const p2 = new Point(3, 4);


console.log(p1.calculateDistance(p2)); 


console.log('*********CALCULATE QUADRANT******');

console.log(point1.calculateQuadrant(2,3));



let arraysdepuntos = [point2, point3, point4];
console.log(point1.calculateNearest(arraysdepuntos));



