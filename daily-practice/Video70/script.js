  // colour is mad up of rgb red green and blue whose value varies from 0 to 255

        function getRandomColor() {
            // let r=255;
            // let g=122;
            // let b=22;   //for trial


            // if we want random number from a to be then use 
            // a+r(b-a)  ((r is the random number from 0 to 1))
// for example we want the random number form 1 to 10 then we have to use 
// 1+r(9) :Let's Try 

// let t=1+Math.random()*9;
// console.log(t);

             /****************New****************/
            //  to make any  float number into roundoff number then we will use 
            // Math.ceil

            let r=Math.ceil(0+Math.random()*255);
            let g=Math.ceil(0+Math.random()*255);
            let b=Math.ceil(0+Math.random()*255);
            return `rgb(${r}, ${g},${b})`;

            
        }

        let boxes=document.querySelectorAll(".box");
        Array.from(boxes).forEach(e => {
            console.log(e);
            e.style.backgroundColor=getRandomColor();
            e.style.color=getRandomColor();
            e.style.bordercolor=getRandomColor();
            
            
        });
