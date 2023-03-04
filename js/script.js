let a = +prompt('Enter first number');
let b = +prompt('Enter second number');
let sign = prompt('Enter sign (+, -, *, /)');

switch (sign) {
    case "+":
        alert(`result is ${a + b}`);
        break;
    case "-":
        alert(`result is ${a - b}`);
        break;
    case "*":
        alert(`result is ${a * b}`);
        break;
    case "/":
        alert(`result is ${a / b}`);
        break;
}