// let display = document.getElementById("display");
// let expression = "";

// function appendToDisplay(value) {
//     expression += value;
//     display.value = expression;
// }


// function clearDisplay() {
//     expression = "";
//     display.value = expression;
// }

// function calculateResult() {
//     try {
//         expression = expression.replace('x', '*');
        
//         display.value = eval(expression);
//     } catch (error) {
//         display.value = "Error";  // Show error if the expression is invalid
//     }
// }


//logic to bult a calculator 




let display=document.querySelector("#display");
let buttons=document.querySelectorAll(".classbtn")
let clearButton=document.getElementById("btnac");
let equalsButton=document.getElementById("btnequals");


buttons.forEach(button=>{
    button.addEventListener("click",function(e){
         
       let count= e.target.innerText;
       display.value+=count;
       console.log(count);
       
    
    })

})

clearButton.addEventListener("click",()=>{

    display.value="";
});

// equalsButton.addEventListener("click",(e)=>{

//     let expression=display.innerHTML;

//    equalsButton.display=eval(expression)

// })
equalsButton.addEventListener("click", () => {
    let expression = display.value;

    try {
        expression = expression.replace('x', '*');
        // Try to evaluate the expression
        let result = eval(expression);
        console.log(expression);
        
        display.value = result; // Display the result if no error
    } catch (error) {
        // If an error occurs during evaluation, show "Error"
        display.value = "Error";
    }
});








