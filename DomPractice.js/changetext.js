//Create two paragraphs of text. Write a function to change the text content of the first paragraph when the button is clicked, and change the background color of the second paragraph.



let para1=document.querySelector("#para1")
let para2=document.querySelector("#para2")
let button=document.querySelector("#btn")


function changeText(){

    button.addEventListener("click",function(){

       para1.innerText=para2.textContent;

       para2.style.backgroundColor="green"
    })
}
changeText();