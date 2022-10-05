
let button = document.querySelectorAll("button");
let buttonArr = Array.from(button);
let screen = document.querySelector(".screen");
let operationArr = [];
let i = 0;
let opAmount = 0;


buttonArr.forEach(button => {
    button.addEventListener("click", function () {
        let whatIs = button.className;
        console.log(whatIs);
        console.log(button.innerText);
        if(operationArr.length>0) {
            if(whatIs == "num"){
                operationArr[i] += button.innerText;
                opAmount = 0;
            }
            if(whatIs == "op") {
                if(opAmount == 1){
                    operationArr = [];
                    console.log("solo un operando, vuelve a empezar");
                    opAmount = 0;
                    i = 0;
                }
                else {
                    i++;
                    opAmount++;
                    operationArr[i] = button.innerText;
                    i++;
                    operationArr[i] = "";
                }
            }
            if(whatIs == "res") {
                i = 0;
                operationArr = [];
                opAmount = 0;
            }
            if(whatIs == "eq") {
                if(operationArr.length>=1 && opAmount == 0) {
                let opString = operationArr.toString();
                console.log(opString);
                calculate(operationArr);
                i = 0;
                opAmount = 0;
                operationArr = [];
                }
                else{
                    i = 0;
                    opAmount = 0;
                    operationArr = [];
                }
            }
            
        }
        else {
            if(whatIs == "num"){
                operationArr[i] = button.innerText;
                
            }
        }
    });
});


function calculate(opArr) {
    let noMultOrDiv = false;
    console.log(parseInt(opArr[0]) + parseInt(opArr[2]));
    for(i = 0; i<opArr.length; i++) {
         
        if(opArr[i] == "*" || opArr[i] == "/"){
            if(opArr[i] == "*"){
                opArr[i-1] = parseInt(opArr[i-1]) * parseInt(opArr[i+1]);
                opArr.splice(i, 2);
                i--;
            }
            if(opArr[i] == "/"){
                if(opArr[i] == "/"){
                    opArr[i-1] = parseInt(opArr[i-1]) / parseInt(opArr[i+1]);
                    opArr.splice(i, 2);
                }
            }
        }
        
    }
}







function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
