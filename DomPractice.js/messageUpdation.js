// Use setTimeout to display a series of notifications to the user. For example, show a message "Loading..." immediately, then after 2 seconds, display "Almost there...", and finally, after 4 more seconds, display "Loaded successfully!". This sequence of delayed notifications simulates a loading process.


let span=document.querySelector("#mssg1")
let para1 = document.querySelector("#para1")
let para2 = document.querySelector("#para2")


function messgaeUpdation(){

    span.innerHTML="Loading ,,,,,,,,,,,";

    setTimeout(() => {
        span.innerHTML="loadingnjbhjbjbh"
    }, 2000);


    setInterval(()=>{
        para1.innerHTML="Amlost there bhai js wala "
    },4000);

    setInterval(()=>{
        para2.innerHTML="loading succesfull js wlao "
    },3000)




}

messgaeUpdation();

