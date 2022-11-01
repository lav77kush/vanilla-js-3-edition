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

const scripts=[
    {
    name:"Coptic",
    ranges:[[994,1008],[1234, 4354], [12345,56332]],
    direction:"ltr",
    year:200,
    living:false,
    link:"https://test.com"

},
{
    name:"Coptic",
    ranges:[[994,1008],[1234, 4354], [12345,56332]],
    direction:"ltr",
    year:200,
    living:false,
    link:"https://test.com"

},
{
    name:"Coptic",
    ranges:[[994,1008],[1234, 4354], [12345,56332]],
    direction:"ltr",
    year:200,
    living:true,
    link:"https://test.com"

}
]
   

function filter(array, test){
    let filtered=[]
    for(let item of array){
        if(test(item)) {filtered.push(item)}
    }
    return filtered;
}

const passed=filter(scripts, (item)=>item.living);

console.log(passed);



function map(array, transform){
    let mapped=[]
    for(let  value of array){
        mapped.push(transform(value));

    }
    return mapped;
}
const  result =map([10,20,30,40], item=>item*20);
console.log(result);



function reduce(array, combine, start){
    let current = start;
    for(let element of array){
        current = combine(current,element);
    }

    return current;
}


console.log(reduce([1,2,3,4,5],(a,b)=>a+b, 0));
