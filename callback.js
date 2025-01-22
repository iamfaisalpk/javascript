setTimeout( ()=> {
  console.log("rinu");
},2000)

function njna(avl){
  console.log("neeyum");
  avl()
}

njna(function (){
  console.log("njna called");
})