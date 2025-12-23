// function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  
//     function thum(thumbnails){
// let thumbnails = document.createElement("div");
//   thumbnails.className = "thumbnail";
//   document.querySelector(".card").append(thumbnails);

//   let imgElement = document.createElement("img");
//   imgElement.src = "thumbnail";
//   thumbnails.append(imgElement);

//   thumbnails.style.cssText = `
//     width: 170px;
//     height: 100px;
//     border: 2px solid black;
//     margin: 15px;
//     border-radius: 22px;
//     overflow: hidden;
//   `;

//   imgElement.style.cssText = `
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     display: block;
//   `;

// }
//   }
    

// createCard(
//   "Introduction to Backend | Sigma Web Dev video #2",
//   "CodeWithHarry",
//   560000,
//   7,
//   "31:22",
//   "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
// );

console.log("Hello Js");
 function thum(thumbnail){
let thumbnails = document.createElement("div");
  thumbnails.className = "thumbnail";
  document.querySelector(".card").append(thumbnails);

  let imgElement = document.createElement("img");
  imgElement.src = thumbnail;
  thumbnails.append(imgElement);

  thumbnails.style.cssText = `
    width: 170px;
    height: 100px;
    border: 2px solid black;
    margin: 15px;
    border-radius: 22px;
    overflow: hidden;
  `;

  imgElement.style.cssText = `
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  `;

}

thum("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");