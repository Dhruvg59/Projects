// let image=document.querySelector("#img1")
// let image2=document.querySelector("#img2")
// let button= document.querySelector("#btn")

// function changeimage(){

//     button.addEventListener("click",function(){
       
//         if(image.style.display !== "none"){
//             image.style.display="none";
//             image2.style.display="block";
//         }else{
//             image.style.display="block";
//             image2.style.display="none";
            
//         }
    
     
//     });
   
 

// }
// changeimage();








//toggle on the images

let image1=document.querySelector("#img1")
let image2=document.querySelector("#img2")
let image3=document.querySelector("#img3")

let button=document.querySelector("#btn")


function changeImage(){

    button.addEventListener("click",function(){

        if(image1.style.display !== "none"){
            image1.style.display="none"
            image2.style.display="block"
        } else if(image2.style.display!=="none"){
            image1.style.display="none"
            image2.style.display="none"
            image3.style.display="block"

        } else{
            image1.style.display="block"
            image2.style.display="none"
            image3.style.display="none"

        }
    })
         
      
}
changeImage();



