let arr=[1,3,2,4,5,6,7,0]
console.log(arr);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
console.log(`*****1.FINSIH*****`)
// arr.forEach(value=>{
//     console.log(value);
// })
// console.log(`*****2.FINSIH*****`)
// for(let i=0;i<arr.length;i++){
//     console.log(i);
// }
// arr.sort();
// console.log(arr);
arr.pop();
arr.unshift("hello")
arr.shift()
arr.push(250);
delete(arr[7])//space should not be remove 

console.log(arr);

// let a1=[1,2,3];
// let a2=[4,5,6];
// let a3=[7,8,9];
// a1.concat(a2,a3);//existing arr isnt change only add of 2 arr and returned it 
// console.log(a1);
// console.log(a1.concat(a2,a3))

/*remove function from index to index*/
// arr.splice(2,5);
console.log(arr);
//Loops in Array
//1.Simple For loop
// for(let i=0;i<arr.length;i++){
// // console.log(i);
// console.log(arr[i]);
// }


//For Each Loop
// arr.forEach((val,index,arr)=>
// {
//     // console.log("Hello Dunia")
//     // console.log(value);
//     // console.log(index)
//     // console.log(arr);
//     console.log(val,index,arr);
// })

let obj={
    nam:"Aditya",
    year:"2nd",
    branch:"CSE"

}
// for (const key in obj) {
//     if (!Object.hasOwn(obj, key)) continue;
// //    console.log(key);
// // let ele=obj[key];
// // console.log(key,ele);

// }


//for of loop
// arr.forEach((value)=>{
//     console.log("hello");
// })

// for (const value of arr) {
//     console.log(value);
// }

//Map filter  reduce
let newarr=arr.map((value,index,arr)=>{
    console.log(value,index);
    return(value)
    
})
console.log(newarr)