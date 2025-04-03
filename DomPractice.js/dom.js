//designing a code to swap the 2 images 


let img1=document.querySelector("#img1")
let img2=document.querySelector("#img2")
let btn=document.querySelector("#btn")


//add an eventlistner on the swap button 

btn.addEventListener("click",function(){
    let img1src=img1.src;
    let img2src=img2.src;
    img1.src=img2src;
    img2.src=img1src;

})