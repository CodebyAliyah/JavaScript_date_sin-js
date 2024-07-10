
const myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString()) 

// let myCreatedDate = new Date(2024, 6, 9)
// let myCreatedDate = new Date(2024, 6, 9, 5, 50)
let myCreatedDate = new Date("07-09-2024")
console.log(myCreatedDate.toLocaleDateString());

let newDte = new Date()
console.log(newDte)
console.log(newDte.getMonth());
console.log(newDte.getDay());


newDte.toLocaleString('default', {

  weekday : "long"
 
})