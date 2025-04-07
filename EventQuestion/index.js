let modebtn=document.querySelector("#mode");


let body=document.querySelector("body");
let currmode ="light";
modebtn.addEventListener("click",()=>{
  
    if(currmode==="light"){
        currmode="dark";
        // document.querySelector("body").style.backgroundColor="black";
        // document.querySelector("body").classList.add("dark")
        body.classList.add("dark");
        body.classList.remove("white")
    }
    else{
        currmode="light"
       body.classList.add("white");
       body.classList.remove("dark");
        // document.querySelector("body").classList.add("white")
        // document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currmode);
    
    
});