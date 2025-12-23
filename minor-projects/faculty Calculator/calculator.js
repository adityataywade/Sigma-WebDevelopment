 console.log("Enter Two Number");
// let a=prompt("Enter First Number");
// let b=prompt("Enter operation");
// let c=prompt("Enter second number")
let a=1,b="+",c=5;
let rn=Math.random();
console.log(rn);
console.log("Perform Operation");
let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"*",
}
// if(rn>0.1){
//     console.log(`THE RESULT IS ${eval(`${a} ${b} ${c}`)}`);
// }
// else{
//     b=obj[b];
//     console.log(`The Faulty Result is${eval(`${a} ${b} ${c}`)}`);
// }

if(rn>0.5){
    if(b=="+"){
        console.log(a+c);
    }
      if(b=="-"){
        console.log(a-c);
    }
      if(b=="*"){
        console.log(a*c);
    }
      if(b=="/"){
        console.log(a/c);
    }
    
}
else{
   if(b=="+"){
        console.log(a-c);
    }
      if(b=="-"){
        console.log(a/c);
    }
      if(b=="*"){
        console.log(a+c);
    }
      if(b=="/"){
        console.log(a*c);
    }
}


