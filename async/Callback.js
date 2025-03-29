//Callback Hell

function getData(data,getNextData ){

    setTimeout(()=>{
        console.log("data",data)
        if(getNextData){
            getNextData();

        }
        
    },2000);
}

console.log("getting data1 ..");
getData(1,function testing(){
    console.log("getting data 2..");
    getData(2,function testing(){
        console.log("getting data 3");
        getData(3,function testing (){
            
            
        })
        
    })
    
})

// console.log("getting data 1");

// getData(1,()=>{
//     console.log("getting data 2");
//     getData(2,()=>{
//         console.log("getting data 3");
//         getData(3,()=>{
//             console.log("getting data 4...");
//             getData(4)
            
//         })
//     });
// });


function greetme(name,callback){
    console.log("hello",name );

    callback();
    
}
function saybye(){
    console.log("bye bye Software Enginner");

    
}
greetme("dhruv", saybye)





//avoiding callbackhell cause it will be difficult to understnad this code 



//promises for simpler code


