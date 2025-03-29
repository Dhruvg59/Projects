

const URL="https://cat-fact.herokuapp.com/facts/random"
const factpara= document.querySelector("#fact");


// const getData= async()=>{
//  console.log("getting data ...");
 
// let response=  await fetch(URL);
// console.log(response);
// let data= await response.json();
// console.log(data.text);

// factpara.innerText=data.text;


// };


function getData(){
    fetch(URL).then((response)=>{
       return response.json();


    }).then((data)=>{
        console.log(data);
        factpara.innerText=data.text;
        
    });
}