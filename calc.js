var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

button.addEventListener("click", doMath);

// This makes it so that you can add, subtract, multiply, divide, multiply powers, find roots,and find out if a number is greater than or less than another number.
function doMath() {
    if  (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = "The answer is: " + answer;
    }
    if (dropdown.value == "-"){
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = "The answer is: " + answer;
    }
    if (dropdown.value == "*"){
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = "The answer is: " + answer;
    }
    if (dropdown.value == "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = "The answer is: " + answer;
    }
    if (dropdown.value == "%"){
        answer = Math.pow(parseInt(input1.value), parseInt(input2.value));
        display.innerHTML = "The answer is: " + answer;
    }
    if (dropdown.value == "|"){
        answer = Math.sqrt(parseInt(input1.value), parseInt(input2.value));
        display.innerHTML = "The answer is: " + answer;
    }
    if (dropdown.value == "^"){
        answer = Math.exp(parseInt(input1.value), parseInt(input2.value));
        display.innerHTML = "The answer is: " + answer;
    }
    if (dropdown.value == "<"){
        answer = parseInt(input1.value) < parseInt(input2.value);
        display.innerHTML = "The first number is less than the second number: " + answer;
    }
    if (dropdown.value == ">"){
        answer = parseInt(input1.value) > parseInt(input2.value);
        display.innerHTML = "The first number is greater than the second number: " + answer;
    }
}