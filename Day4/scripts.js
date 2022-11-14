import { onClick } from "./functions.js"
  //Button color chang on multiple click -->
//   const arrColor = ['red','yellow','green','blue','pink','black']
// let current = 0     //use math. random to reloop the color
//   const onClick = () => {
//     button.style.backgroundColor = arrColor[current]
//     current++;
   
// }
        const button = document.querySelector('button');
        button.addEventListener('click', onClick)

