// console.dir("hello");
// alert("Hello Dhruv ");


// console.dir(document.body.childNodes[0 ]);
// console.log(document.body);


//DOM slectors 
//USING ID 1
// let heading = document.getElementById("header"); 
// console.dir(heading);

//USING CLASS 2

// let heading = document.getElementsByClassName("header"); 
// console.dir(heading);
// console.log(heading);


//USING TAG  3

// let para= document.getElementsByTagName("p")
// console.dir(para);
// console.log(para);



//QUERY selector

// let elemts =document.querySelector("p")// 1st elemt 
// console.dir(elemts);


//AllSelctor

// let allelemts=document.querySelectorAll("p");
// console.dir(allelemts);

// for innertext and inner.html;
// let div=document.querySelector("div")
// console.dir(div)

// head.innerText="new heading";
// head.innerHTML="bbvjbv";


//
// let head=document.querySelector("h1")
// console.log(head);



//Pratice Question  1

// let head=document.querySelector("h2");
// console.dir(head.innerText);

// head.innerText=head.innerText+" From Dhruv Singh Gandas";


// Practice Question 2

let divs = document.querySelectorAll(".box");

let idx=1;
for(let div of divs){
    div.innerText=`new value ${idx}`;
    idx++;
}



// divs[0].innerText="new value1";
// divs[1].innerText="new value2";
// divs[2].innerText="new value3";










