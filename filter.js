const globel = [
    {
        id : 1,
        name : "faizy",
        age : 19,
    },

    {
        id : 1,
        name : "iam",
        age : 19,
    },

    {
        id : 2,
        name : "fais",
        age : 25,
    }
];

const newArray = globel.filter((value) => value.age === 19 && value.id === 1);

console.log(newArray);
