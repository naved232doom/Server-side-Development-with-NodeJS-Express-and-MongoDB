var rectsolve= require('./rectangle');
const solveRectangle=(l,b)=>{
    console.log("Area "+rectsolve.area(l,b));
    console.log("Perimeter "+rectsolve.perimeter(l,b));
}

solveRectangle(10,6);