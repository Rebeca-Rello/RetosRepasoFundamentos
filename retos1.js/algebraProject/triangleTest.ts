

import { Triangle } from "./triangle"
import { Point } from "./point"


let point1 = new Point (4,6);
let point2 = new Point (4,8);
let point3 = new Point (5,6);


let triangle1 = new Triangle(point1, point2,point3);



console.log(triangle1.calculateLengthSides());
