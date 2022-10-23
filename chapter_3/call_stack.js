function greet(who){
    console.log("Hello "+who);
}
greet("Harry");

console.log("Bye");


// program goes like this:
/*
not in function
    in greet 
       in console.log 
    in greet
not in function   
  in console.log 
  
not in function

Because a function has to jump back to the place that
called it when it returns, the computer must have to remember
the context from which the call call happened.

The place where the computer stores this context is the call stack. Every time a function is called
 the current context is stored on the top of the stack

 when a function returns , it removes the top context from the stack and uses that context
 to continue execution
 









*/