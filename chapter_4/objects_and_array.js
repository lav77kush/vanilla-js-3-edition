let anObject={left:1, right:2};
console.log(anObject.left);
// delete operator
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log('right' in anObject);
let objA={a:1, b:2};
Object.assign(objA, {b:5, c:10});
console.log(objA);
console.log(typeof []);
let object1={value:10};
let object2=object1;
let object3={value:10};
console.log(object1==object2);
console.log(object1==object3);
object1.value=15;
console.log(object2.value);
console.log(object3.value);
const score={visitors:0, home:0};
score.visitors=10;
console.log(score);
let journal=[];
function addEntry(events, squirell){
    journal.push({events, squirell})
}
addEntry(["Work", "touched tree", "pizzza", "running", "television"], false);
addEntry(["Work", "icecream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
//console.log(journal);
for(let i=0; i<journal.length; i++){
    const entry=journal[i];
   // console.log(entry)
}
for(let item of journal){
    console.log(item)
}
for(let item in journal){
    console.log(`values>>>${item}`)
}
let name1="lavkush";
for(let c of name1){
    console.log(c);
}
// simple todos
// the sum of range 
const range=function(start,end,step=1){
    let numbersArray=[];
    if(step<0){
        for(let i=start; i>=end; i+=step){
            numbersArray.push(i)
         }
    }
    else {
        for(let i=start; i<=end; i+=step){
            numbersArray.push(i)
         }
    }
 
    return numbersArray;
}

 function sum(rangeNumbers){
    console.log(rangeNumbers);
    let sum=0;
    for(let i=0; i< rangeNumbers.length; i++){
       sum+=rangeNumbers[i];
    } 
    return sum;
 }
console.log(sum(range(10,1,-5)));

// reverse an array
const testArray=[10,20,30,40,50,60];
function reverseArray(array){
    const reversedArray=[];
    for(const value of array){
       reversedArray.unshift(value);
    }
    return reversedArray;
}
console.log(testArray);
console.log(reverseArray(testArray));


function reverseInPlace(array){
    const length=array.length;
    for(let i=0; i<Math.floor(5/2);i++){
        let swap=array[i];
        array[i]=array[length-i-1];
        array[length-i-1]=swap;
    }
   return array;
}
const values=[1,2,3,4,5];
reverseInPlace(values);
console.log(values);

function multiply1(values, factor){
  for(let i=0; i<values.length;i++)
   {
    values[i]*=factor;
   }
   return values;
}
multiply1(values, 2)
console.log(values);
