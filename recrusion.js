// function sum(n){
//     let result = 0;
//     for (let i= 1; i<=n ;i++){
//         result += i;
//     }
//     return result;
// }

// console.log(sum(3));

function sum(n){
    if (n<=0){
        return 0;
    } else {
        return n + sum (n-1)
    }
}

console.log(sum(3));