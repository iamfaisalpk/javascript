function x(y){
  console.log("x called");
  y()
}

x(function () {
  console.log(" nja called");
})