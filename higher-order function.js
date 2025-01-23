// const radias = [2,4,5,6]

// const calculate =()=> {
//     const empty =[]
//     for(i=0; i<radias.length ; i++){
//         empty.push(Math.PI * radias[i]*radias[i])
//     }

//     return empty;
// }

// console.log(calculate(radias));


// const calculateDiameter =()=> {
//     const empty =[]
//     for(i=0; i<radias.length ; i++){
//         empty.push(2*radias[i])
//     }

//     return empty;
// }

// console.log(calculateDiameter(radias));

const radias =[2,3,4,5,6];

const area = (radias)=> {
    return Math.PI*radias[i] *radias[i]
}

const calculate = (radias,logic) => {
    const empty = []
    for (i=0; i<radias.length;i++){
        empty.push(logic(radias))
    }
    
    return empty;
}

console.log(calculate(radias,area));