
//EVENT HANDLING


// let btn1=document.querySelector("#btn1");

// btn1.onclick=(ev)=>{

//     let a=14;
//     console.log("btn1 was clicked");
//     a++;
//     console.log(a);
    
    
//     console.log(ev);
//     console.log(ev.type);
//     console.log(ev.target);
//     console.log(ev.clientX ,ev.clientY);
    
    
    
    
// };

//EVENT HANDLING

// let newdiv=document.querySelector(".newdiv");

// newdiv.onmouseover = (ev) => {


//     console.log(ev);
//     console.log(ev.type);
//     console.log(ev.target);
//     console.log(ev.clientX ,ev.clientY);

//     console.log("you are inside the div ");
    
// };




//ADD EVENT LISTENERS

let btn1 =document.querySelector("#btn1");

btn1.addEventListener("click" ,()=> {
    console.log("button was clicked-handler 1");
    
});

btn1.addEventListener("click" ,()=> {
    console.log("button was clicked -handler 2");
    
});

const handler3=()=>{
    console.log("button1 was clicked - handler 3");
    
};


btn1.addEventListener("click" ,handler3);
btn1.addEventListener("click" ,()=> {
    console.log("button was clicked- handler 4");
    
});

btn1.removeEventListener("click",handler3);

// let newdiv1=document.querySelector("newdiv");
// console.log("12343");
