const multiplier=(factor)=> {
     return (number)=> number*factor;
}
const twice=multiplier(2)
console.log(twice(10));

const greeting=(text)=>{
    return (name)=> text +' ' +name
}
const msg1=greeting("Welcome to team mr. ");
console.log(msg1("Shubham"));
console.log(msg1("Raj"));
console.log(msg1("Priyanka"));
// increment counter
function incrementCounter(){
    let counter=0;
    return function() {

        counter+=1
        console.log(counter)
    }
}
const add=incrementCounter();
add();
add();
add();


const makeFunc= function makeFunction(){
    const name="Mozilla";
    function displayName() {
        console.log(name)
    }

    return displayName();

}
makeFunc();