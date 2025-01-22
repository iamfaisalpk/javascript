//  spread operators

// const player =["faizy","fayiz","fasi","jasim","dilshad"]
// const player2 =["faiz","fayi","fas","jasi","dilsha"]

// const player1 = {...player};


// console.log(player);
// console.log(player2);

// rest parameeter

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));
