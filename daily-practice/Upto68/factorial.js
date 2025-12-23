// //Find the factorial using reduce and for loop
// let a=6;
// let arr=[];
// for(let i=0;i<a;i++){
//     arr[i]=i+1;

// }
// let red=(a,b)=>{
//     return a*b;
// }
// console.log(arr.reduce(red));0..

// using for loop

let a=6;
let fact=1;
for(let i=1;i<=a;i++){
fact=fact*i;
}
console.log(fact);