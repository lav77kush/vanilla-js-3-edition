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
//

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



