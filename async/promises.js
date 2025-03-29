//promises to solve thi issue in the call back function 



//syntax of promises


// let promise=new Promise((resolve,reject) =>{
//     console.log("ï am a promise");
//     // resolve ("success");

//      reject("error")   ; 
// });
// console.log(Promise);




// function getData(data,getNextData){
//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{
//             console.log("data",data)
//             // resolve("success")
//             reject ("error")
//             if(getNextData){
//                 getNextData();
    
//             }
            
//         },2000);
//     })


// }



//.then and .catch


// const getPromise =()=>{
//    return new Promise((resolve,reject)=>{
//         console.log("i am a promise");
//         resolve("success")
//         reject("error")
//     });
// };

// let promise=getPromise();
// promise.then((res)=>{
//     console.log("promise fullfilled",res);
    
// })

// promise.catch((err)=>{
//     console.log("rejeceted",err);
    
// });\




//chaining in promises



// function asyncFunc(){

//     return new Promise ((resolve, reject)=>{

//         setTimeout(()=>{
//             console.log("some data ");
//             resolve("success")
            
//         },4000);
//     });
// }

// function asyncFunc2(){

//     return new Promise ((resolve, reject)=>{

//         setTimeout(()=>{
//             console.log("some data ");
//             resolve("success")
            
//         },4000);
//     });
// }


// console.log("fetching data 1");

// let p1= asyncFunc();
// p1.then((res)=>{
//   console.log(res);
//   console.log("fetching data 2..");
//   let p2= asyncFunc2();
//   p2.then((res)=>{})
  
  
// });
// console.log("fetching data 2");


// let p2= asyncFunc2();
// p2.then((res)=>{
//   console.log(res);
  
// });



//chaining in promises using our old example


function getData(data ){
   return new Promise ((resolve,reject)=>{
         
    setTimeout(()=>{
        console.log("data",data)

        resolve("success")
        // if(getNextData){
        //     getNextData();

        // }
        
        
    },3000);
   });
    
}


// getData(1).then((res)=>{
//     console.log(res);
    
//     getData(2).then(()=>{
//         console.log(res);
          
//         getData(3).then(()=>{
//             console.log(res);
            
//         })
//     })
// })

//another method simplified

getData(1).then((res)=>{
    return getData(2);
}).then((res)=>{
    return getData(3)
    
}).then((res)=>{
    console.log(res);
    
})