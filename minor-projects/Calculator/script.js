const buttons = document.querySelectorAll(".btn1");
const input = document.querySelector("input");
let str = "";

// Button clicks
// buttons.forEach(btn => {
//   btn.addEventListener("click", (e) => {
//     if (e.target.innerHTML === "=") {
//       evaluate();
//     } else {
//       str += e.target.innerHTML;
//       if(e.type=="click"){
//         console.log(e.type)
//       }
//       update();
//     }
//   });
// });

// Keyboard input
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    evaluate();
  } else if (/[\d+\-*/.]/.test(e.key)) {
    str += e.key;
    console.log(e.key)
    update();
  } else if (e.key === "Backspace") {
    str = str.slice(0, -1);
    update();
  }
});
/*event listner important points*/
/*
1.e.type==> click ,keydown
2. e.target==> when clikc it return s the target that you clicked
*/
buttons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      evaluate();
    } else 
       if (e.target.innerHTML ==="AC") {
      str=""
      document.querySelector("input").value=str;
    } else
       if (e.target.innerHTML ==="C") {
      str=str.slice(0,-1)
      document.querySelector("input").value=str;
    } else{
      str += e.target.innerHTML;
      console.log(e.target.innerHTML);
           update();
    }
  });
});




function update() {
  input.value = str;
}

function evaluate() {
  try {
    str = eval(str).toString();
    update();
  } catch {
    input.value = "Error";
    str = "";
  }
}

