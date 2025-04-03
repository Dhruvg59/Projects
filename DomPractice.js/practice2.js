//changing the text of the paragraph by clicking the button


let para=document.querySelector("#para");
let btn= document.querySelector("#btn")

btn.addEventListener("click",(ev)=>{
    // para.innerText="new text"
    // para.style.backgroundColor="blue"
    para.style.display="none";

    // if(para.style.display="block"){
    //     para.style.display="block";
    //     para.innerText="text is visible "
    // }else{
    //     para.style.display="none"
    //     para.innerText="text is hidden "
    // }
    
});