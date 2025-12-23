// console.log("welcome to javascript");
// // let i=0;
// // for (let i = 0; i < 10; i++) {
// //     console.log(i);
    
// // }
// console.log(typeof("hello"));
// var f="5";
// console.log(typeof(f));
// console.log(f);
// let obj={
//     name: "Aditya taywade",
//     subject: "js"
// }

// for (const key in obj) {
//     console.log(key);  
// }
// for (const key in obj) {
//         const temp=obj[v];
//     console.log(key,temp); 
// }
// // for (const key in obj) {
// //     const temp=obj;
// //     console.log(key,temp);  
// // }


// function nice(name){
//     console.log("My  Name is"+name);
    
// }
// nice("Aditya");
// nice("ram");

// function addition(a,b){
//    let sum=a+b;
//    return sum;
// }
// addition(5,3);
// console.log(addition(2,3));

// For in loop
const tri={
    1:"one",
    2:"two",
    3:"three",
}
for (const key in tri) {
    console.log(tri[key]) ;
      
}

/***** Function    *******/
function func(a,b){
    return a+b;
}
console.log(func(5,2));
let result=func(5,5);
console.log(result);

//new type
const fun1=(x)=>{
    console.log(x);
}
fun1(555);








/******* STRINGS   *******/ 

console.log("Hello i am aditya ");
let a="Hello";
console.log(a);
console.log(typeof(a));
console.log(a[0]);
for( i=0;i<a.length;i++){
    console.log(a[i]);
}

//Concatination of String
let nam="Aditya";
let age=19;
let year="2 nd";
let branch="CSE";
console.log("My Name is "+nam+" age is "+age+" stuided in "+year+" in Branch "+branch);

console.log(` My Name is ${nam} my age is ${age} i am in ${year} branch ${branch} `)