const rabbit={};
rabbit.speak=function(line){
    console.log("The rabbit says " + line);
}

rabbit.speak("hi, i am alive");

function speak_line( text){
    console.log(`The ${this.type} rabbit says ${text}`)
}

const whiteRabbit={type: " Big and White ", speak_line};
const blackRabbit={type:"black Rabiit", speak_line};
whiteRabbit.speak_line("I am white and Big");
blackRabbit.speak_line("I am Black and Small");

blackRabbit.speak_line.bind(blackRabbit,"I am hungry");


function normalize(){
    console.log(this.coords.map(n=>n / this.length ));

}

normalize.call({coords:[10,20,30], length : 10});

