function x(){
    let a =20;
    function y(){
        console.log(a);
    }
    return y;
}

let result = x();

console.log(result);

result();