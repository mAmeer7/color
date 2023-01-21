let button= document.querySelector('button');
const body= document.querySelector("body");
let colors= ['blue','yellow','aqua','pink','green','red','violet','brown','aquamarine','silver','lightcoral'];

body.style.backgroundColor ='purple'
let v=colors.length

button.addEventListener('click', changeColor);





function random(max,min){
    return Math.floor(Math.random() * (max - min) ) + min;    
}



function changeColor(){
    const index= random(0,v);
    body.style.backgroundColor =colors[index]
    console.log(index)
}