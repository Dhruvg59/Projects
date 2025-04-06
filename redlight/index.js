// let button =document.querySelector("#btn");

// function changecolor(){

//     button.style.color="red"
// }

// function ondoubleclick(){
//     button.style.color="green"
// }

// button.addEventListener("click", changecolor);
// button.addEventListener("dblclick", ondoubleclick);


let redlight=document.querySelector("#red")
let yellowlight=document.querySelector("#yellow")
let greenlight=document.querySelector("#green")


function changecolorred(){
    redlight.style.backgroundColor="grey"
    yellowlight.style.backgroundColor="grey"
    greenlight.style.backgroundColor="grey"

    redlight.style.backgroundColor="red"
 
}
function changecoloryellow(){
    redlight.style.backgroundColor="grey"
    yellowlight.style.backgroundColor="grey"
    greenlight.style.backgroundColor="grey"

    yellowlight.style.backgroundColor="yellow"
}
function changecolorgreen(){

    redlight.style.backgroundColor="grey"
    yellowlight.style.backgroundColor="grey"
    greenlight.style.backgroundColor="grey"

    greenlight.style.backgroundColor="green"
}

let colors = ["red", "yellow", "green"];
let index = 0;

function changeLight() {

    if(colors[index]==="red"){
        changecolorred();

    }else if(colors[index]==="yellow"){
        changecoloryellow();

    }else if(colors[index]==="green"){
        changecolorgreen();

    }
    index++;
    if(index>=colors.length){
        index=0;
       
    } // Cycle through colors
}

setInterval(changeLight, 1000); // Change light every 1 second




// settimeout(changecolorred,2000);
// settimeout(changecoloryellow,2000);
// settimeout(changecolorgreen,2000);
