//Create a countdown timer that counts down from 10 seconds to 0, and then displays "Time's up!" at the end.


let timer= document.querySelector("#display");

let countdown=11;

function setTimer(){

    timer.innerHTML=countdown;

    if(countdown>0){
        countdown--;

    }else{
        timer.textContent="Times up"
        clearInterval(final)
    }
}
let final= setInterval(setTimer,1000)