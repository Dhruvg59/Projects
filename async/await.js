// function api(){

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve(200);

            
//         },2000);
//     })
// }

// async function getWeatherData(){

//     await api(); // 1st call 
//     await api (); // 2nd call 
// }


function getData(data ){
    return new Promise ((resolve,reject)=>{
          
     setTimeout(()=>{
         console.log("data",data)
         resolve("success")
       
         
         
     },3000);
    });
     
 }

 //Async /await 

 async function getAlldata(){
    console.log("getting data 1..");
    
    await getData(1);
    
    console.log("getting data 2..");
    await getData(2);
    console.log("getting data 3..");
    await getData(3);
    console.log("getting data 4..");
    await getData(4);
 }


 //using iife syntax

 (async function (){
    console.log("getting data 1..");
    
    await getData(1);
    
    console.log("getting data 2..");
    await getData(2);
    console.log("getting data 3..");
    await getData(3);
    console.log("getting data 4..");
    await getData(4);
 })();



