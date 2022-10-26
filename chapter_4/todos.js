// simple todos
let todos=[];
function addTask(task){
    todos.push(task)
}
function getTask(){
  return  todos.shift()
}
function rememberUrgently(task){
    todos.unshift(task)
}
addTask("groceries");
addTask("medicines");
console.log(todos);
console.log(getTask());
console.log(todos);
rememberUrgently("vegetables");
console.log(todos);
console.log([2,4,5,7].indexOf(4));
console.log([5,34,45,29].lastIndexOf(45));
console.log([10,20,30,40,50,40,60].slice(2,5)); // 30,40
console.log([10,20,30,40,50,40,60].slice(5)); // 40,60
const arr=["a", "b", "c", "d", "e", "f"];
// remove element placed at index 2
function remove(array, index){
    return array.slice(0,index).concat(array.slice(index+1))
}
console.log(remove(arr, 2));
const str1=String(6);
console.log(str1);
const str2=str1.padStart(3,0);
console.log(str2);
const repeat='LA';
console.log(repeat.repeat(5));
function mathMax(...numbers)
{
    let result=-Infinity;
    for(let number of numbers){
        if(number > result) result=number;
    }
    return result;
}
console.log(mathMax(10,-5,6,34,9));









