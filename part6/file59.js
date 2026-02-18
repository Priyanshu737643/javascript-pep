//! key:value pairs
// student = {
//     name: "Priyanshu",
//     display: function () {
//         console.log(this.name);
//     }
// }
// student.display();  //? Priyanshu

//* -----------------------------------------------------------------

//! 'this' keyword will not work in arrow functions
// student = {
//     name: "Priyanshu",
//     display:  () =>{
//         console.log(this.name);
//     }
// }
// student.display();  //? undefined

//* -----------------------------------------------------------------

//! without key:value pairs
student = {
    name: "Priyanshu",
    display(){
        console.log(this.name);
    }
}
student.display();  //? Priyanshu