setTimeout( ()=> {
  console.log("rinu");
},3000)

function njna(avl){
  console.log("neeyum");
  avl()
}

njna(function (){
  console.log("njna called");
})