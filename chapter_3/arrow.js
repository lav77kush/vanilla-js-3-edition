// third notation of functions
sayHello = ()=>  "Hi , I am an Arrow function without param ";
console.log(sayHello);
// power and exponent using arrow
const power=(base, exponent)=>{
    let result=1;
    for(let i=1; i<exponent; i++){
        result*=base;
    }
    return result;
}