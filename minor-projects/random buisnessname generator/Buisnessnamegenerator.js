/* Create a business name generator by combining list of adjectives
and shop name and another word

Adjectives:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/
let rn=Math.random();
let rn2=Math.random();
let rn3=Math.random();
/*Adjective*/
if(rn<0.33){
    console.log("Crazy");
}
else{
    if(0.33<rn&&rn<0.66){
         console.log("Amazing");
        }
        else{
            console.log("Fire");
    }
}
/*2nd Word*/
if(rn2<0.33){
    console.log("Engine");
}
else{
    if(0.33<rn2 && rn2<0.66){
         console.log("Foods");
        }
        else{
            console.log("Garments");
    }
}
if(rn3<0.33){
    console.log("Bros");
}
else{
    if(0.33<rn3&&rn3<0.66){
         console.log("Limited");
        }
        else{
            console.log("Hub");
    }
}