// //global and local scope
// let a = 10
// const b = 20
// var c = 30
let a = 300
if (true) {
    //global scope
    //this is called scope
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER: ",a);
}

console.log(a);
// console.log(b);
// console.log(c);