function addNumbers() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var sum = num1 + num2;
    document.getElementById("output").innerHTML = sum;
}

function subtractNumbers() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var difference = num1 - num2;
    document.getElementById("output").innerHTML = difference;
}

function multiplyNumbers() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var product = num1 * num2;
    document.getElementById("output").innerHTML = product;
}

function divideNumbers() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var quotient = num1 / num2;
    document.getElementById("output").innerHTML = quotient;
}
