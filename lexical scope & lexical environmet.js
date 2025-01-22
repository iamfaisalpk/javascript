function a (){
    b();
    function b (){
        console.log(x);
    }
}

let x =10;

a();