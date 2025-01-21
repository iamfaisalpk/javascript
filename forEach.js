const globel = [
    {
        id : 0,
        name : "faizy",
        age : 19,
    },

    {
        id : 1,
        name : "iam",
        age : 18,
    },

    {
        id : 2,
        name : "fais",
        age : 25,
    }
]

// for(let i=0; i < globel.length; i++){
//     console.log(globel[i]);
// } java script method

globel.forEach((value,index,array) => console.log(value.name)); 

