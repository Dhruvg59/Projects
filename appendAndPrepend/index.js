// let div=document.querySelector("div")

// let heading2= document.createElement("h2")

// heading2.innerText="heyy Wassup"

// // div.append(heading2)
// div.prepend(heading2)



//question cunt the number of characters , create a counter

const input= document.querySelector("input")
const div=document.querySelector("div")

input.addEventListener("keydown",function(event) {
    console.log("fired");
    console.log(event.target.value.length);

    // let counter=event.target.value.length+1;

    // div.innerText=counter;

    if(event.target.value.length==" "){
             
        div.innerText=counter

        counter++;
    }
    
    
})