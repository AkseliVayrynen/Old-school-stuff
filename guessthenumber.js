
function getRandomInteger(min, max) {
    var randomNum = Math.floor((Math.random() * max) + min);
    return randomNum;
}

function compareNumbers(first, second) {
    return (first === second);
}

var answer = getRandomInteger(1, 10);

window.onload = function guessTheNumber() { document.getElementById("button").addEventListener("click", function() {
    var userNum = Number(document.getElementById("number").value);
    
    if (userNum % 1 === 0) {
        if (compareNumbers(answer, userNum)) {
            alert("Congrats, you won!");
            answer = getRandomInteger(1, 10);
            } else {
            alert("Try again!");  
            }
        } else {
        alert("The given number is not an Int!");
        }
    
});
}
