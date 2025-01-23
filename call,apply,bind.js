// this

// console.log(this);

function getName(a,b,c) {
    console.log(a,b,c);
    console.log(this.name);
    console.log(this.age);
}

const person = {
    name : "njan",
    age : 19,
    
};

const person2 = {
    name : "neey",
    age : 18,
    
};

// person.method();
// person2.method();

getName.call(person);
getName.apply(person2, ["1","2","3"]);
let newBind = getName.bind(person);
newBind();