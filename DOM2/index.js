
// accesing the attribute
let id=document.querySelector("h2")
console.log(id);


let h2= document.getAttribute("name");
console.log(h2);

// to acces the class name 

let para =document.querySelector("p");
console.log(para.getAttribute("class"));




// to set the attribute

let para =document.querySelector("p");
console.log(para.setAttribute("class","haabuhih"));


// to change the styling in javascript


let div=document.querySelector("div");

div.style.backgroundColor="purple";
div.style,backgroundColor="blue"

div.innerText="new text yaayyy";


// USING THE APEND PREPEND PROPERTY 

// TO APPEND FIRST WE HAVE TO CREATE THE ELEMNT THEN USE THE PROPERTY 

let newbtn=document.createElement("button");
newbtn.innerText="clickme";
console.log(newbtn);

let div=document.querySelector("div");
div.append(newbtn);
div.prepend(newbtn);

div.before(newbtn);

div.after(newbtn);


// PRATICE QUESTION 1

 let newbtn=document.createElement("button");

 newbtn.innerText="click me";

 newbtn.style.backgroundColor="red ";
 newbtn.style.color="white";

 document.querySelector("body").prepend(newbtn)


//PRACTICE QUESTION 2


let para=document.querySelector("p");

