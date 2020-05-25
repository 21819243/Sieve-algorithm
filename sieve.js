//Github page link: https://github.com/21819243/caesar-cipher-algorithm

function FindPrimes() {
    var selectedNumber = document.getElementById("selected_number").value;
    var primeNumbers = [];
    var sqrtNumber = [Math.floor(Math.sqrt(selectedNumber))];
    sqrtNumber[0] = 1;
    sqrtNumber[1] = 1;

    for (var i = 2; i * i <= selectedNumber; i++) {
        if (sqrtNumber[i] !== 1) {
            for (var z = i * i; z <= selectedNumber; z += i) {
                sqrtNumber[z] = 1;
            }
        }
    }

    for (var i = 0; i <= selectedNumber; i++) {
        if (sqrtNumber[i] !== 1) {
            primeNumbers.push(i);
        }
    }
    document.getElementById("resultDiv").innerHTML =
        '<p style="font-weight:bold;">Prime Numbers: </p>';
    for (j = 0; j < primeNumbers.length; j++) {
        document.getElementById("resultDiv").innerHTML += primeNumbers[j] + "<br>";
    }
}