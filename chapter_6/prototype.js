 let empty={};
 console.log(empty.toString());
 const result=Object.getPrototypeOf(empty);
 console.log(result);
 console.log(Object.prototype);
 console.log(Object.getPrototypeOf(empty)==Object.prototype);


console.log((Object.getPrototypeOf(Math.max)==Function.prototype));
console.log(Object.getPrototypeOf([])==Array.prototype);

let protoRabbit= {
    speak(line){
        console.log(`The ${this.type} rabbit says ${line}`)
    }
     ,

    speak1: function (line){
      
    }
};

let killerRabbit=Object.create(protoRabbit);


function makeRabbit(type){
    let rabbit=Object.create(protoRabbit);
    rabbit.type=type;
    return rabbit;
}

killerRabbit.type="killer";
killerRabbit.speak("SKREEE!");


function Rabiit(type){
    this.type=type;
}

Rabiit.prototype.speak=function(line){
    console.log(`This ${this.type} rabbit says ${line}`);
}

let weiredRabiit=new Rabiit("Weired");
weiredRabiit.speak("hey i am weired");57

class Rabbiit {
    constructor(type){
        this.type=type
    }
     
    speak(line){
        console.log(`The ${this.type} rabbit says ${line}`)
    }
}


const rabit2=new Rabbiit("Class Rabit");
rabit2.speak("I am class Rabbit");



