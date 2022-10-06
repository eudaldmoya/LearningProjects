
let button = document.querySelectorAll("button");
let buttonArr = Array.from(button);
let screen = document.querySelector(".screen");
let operationArr = [];
let i = 0;
let opAmount = 0;
let inScreen = document.createElement("div");
screen.appendChild(inScreen);
let operation = document.createTextNode("");
inScreen.appendChild(operation);

buttonArr.forEach(button => {
    button.addEventListener("click", function () {
        let whatIs = button.className;
        console.log(whatIs);
        console.log(button.innerText);
        if(operationArr.length>0) {
            if(whatIs == "num"){
                operationArr[i] += button.innerText;
                opAmount = 0;
                operation.nodeValue += button.innerText;
                

            }
            if(whatIs == "op") {
                if(opAmount == 1){
                    operationArr = [];
                    console.log("solo un operando, vuelve a empezar");
                    opAmount = 0;
                    i = 0;
                    operation.nodeValue = "";
                }
                else {
                    i++;
                    opAmount++;
                    operationArr[i] = button.innerText;
                    i++;
                    operationArr[i] = "";
                    operation.nodeValue += button.innerText;
                }
            }
            if(whatIs == "res") {
                i = 0;
                operationArr = [];
                opAmount = 0;
                operation.nodeValue = "";
                inScreen.appendChild(operation);
            }
            if(whatIs == "eq") {
                if(operationArr.length>=1 && opAmount == 0) {
                operation.nodeValue += button.innerText;
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
                    operation.nodeValue = "";
                }
            }
            
        }
        else {
            if(whatIs == "num"){
                operation.nodeValue = "";
                operationArr[i] = button.innerText;
                operation.nodeValue += button.innerText;
            }
            if(whatIs == "res") {
                operation.nodeValue = "";
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
                    i--;
                }
            }
        }
    }
    for(i = 0; i<opArr.length; i++) {
        if(opArr[i] == "+" || opArr[i] == "-"){
            if(opArr[i] == "+"){
                opArr[i-1] = parseInt(opArr[i-1]) + parseInt(opArr[i+1]);
                opArr.splice(i, 2);
                i--;
            }
            if(opArr[i] == "-"){
                if(opArr[i] == "-"){
                    opArr[i-1] = parseInt(opArr[i-1]) - parseInt(opArr[i+1]);
                    opArr.splice(i, 2);
                    i--;
                }
            }
        } 
    }
    operation.nodeValue += opArr[0];
    console.log(opArr[0]);
    console.log(opArr.length);
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
