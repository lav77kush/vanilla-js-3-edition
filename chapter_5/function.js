// Higher order functions

function repeatLog(n, action){
     
    for(let i=0; i<n; i++){
        action(i);
    }
}

repeatLog(3 , console.log);

let labels=[];
repeatLog(5 , i=>{
    labels.push(`Unit is ${i+1}`);
})

console.log(labels);
function greaterThan(n){
    return m=> m>n;
}
const greaterThan10=greaterThan(10);
console.log(greaterThan10(11));


