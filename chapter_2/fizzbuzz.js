
// write a program using console.log to print all numbers from 1 to 100 
// for numbers divisible by 3 , print "Fizz" 
// for numbers divisible by 5 , print "Buzz"
// for numbers that are visible by both 3 and 5 , print "FizzBuzz"
let count=1;
while(count <=100){
     if(count % 3 == 0){
       console.log("Fizz") 
     }
     if(count % 5 == 0){
        console.log("Buzz") 
     }
     if(count % 3 == 0 && count % 5 == 0  ){
        console.log("FizzBuzz") 
     }
    count++
}