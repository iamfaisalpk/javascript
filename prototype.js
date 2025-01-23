// function employee(fname,lname){
//     this.fname=lname;
//     this.fname=lname;
// }

// employee.prototype.fullname = function(){
//     return this.fname+ " " +this.lname
// }

// let employee1 = new employee("shahima","faisal");
// let employee2 = new employee("jasmin","faisal");

// console.log(employee1.fullname());
// console.log(employee2.fullname());

function employee(fname, lname){
    this.fname=fname;
    this.lname=lname;
}


employee.prototype.company = "meta";

let employee1 = new employee("shahima","faisal")
let employee2 = new employee("jasmin","faisal")

console.log(employee1.fname+ " "+employee1.lname+ " "+employee1.company);
console.log(employee2.fname+ " "+employee2.lname+ " "+employee2.company);