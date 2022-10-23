const arr=[10,20,11, 60,50];
console.log(Math.max(...arr));

// a program that allow all even number from 1 to 100

// first  approach

// for(let i=1; i<=30; i++){
//     if(i%2==0){
//         console.log(i+"\n");
//     }
// }

// second approach
// let i=1;
// while(i<=30){
//     if(i%2==0){
//         console.log(i+"\n");
//     } 
//     i++
// }

// 2 to power 10
let counter=1;
let sum=1;
while(counter<=10){
    sum =sum*2;
    counter++
}
console.log(sum);



// looping a triange using console.log()

let str='*';
while(str.length < 8){
     console.log(str); 
     str=str+'*';

}


