let counter=document.querySelector(".counter")
let button=document.querySelector("#btn")
let reset=document.querySelector("#reset")


let count=0;


function counterIncrease(){
 
   button.addEventListener("click",function(){
    count++;
       
    counter.innerHTML=count;

   })

}

function resetutton(){
    
    reset.addEventListener("click",function(){

        count=0;
        counter.innerHTML=count;

    })
   
}


counterIncrease();
resetutton();