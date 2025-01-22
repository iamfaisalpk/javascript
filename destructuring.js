// 1. Array Destructuring

let ar1=["kerala","Malayalam",10000, ["TVK","COK","ght"]];

let [state,language,population, [a1,a2,a3]] = ar1;

// let state = ar1[0]
// let language = ar1[1]
// let population = ar1[2]


console.log(state);
console.log(language);
console.log(population);
console.log(a1);
console.log(a2);
console.log(a3);

// Object Destructuring

let obj ={
    stat :"chennai",
    langua: "tamil",
    populate : 250000,

    airport:{
        b1:"clct",
        b2 :"trv",
        b3 : "kraipoor"
    }
}

let {stat,langua,populate, airport:{b1,b2,b3}} = obj;

console.log(stat);
console.log(langua);
console.log(populate);

console.log(b1);
console.log(b2);
console.log(b3);


