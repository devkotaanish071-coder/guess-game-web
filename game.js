let number;
let attemptsLeft;

function startGame() {
    let start = parseInt(document.getElementById("start").value);
    let end = parseInt(document.getElementById("end").value);
    attemptsLeft = parseInt(document.getElementById("attempts").value);

    if (start >= end) {
        alert("Start must be less than End");
        return;
    }

    number = Math.floor(Math.random() * (end - start + 1)) + start;

    document.getElementById("info").innerText = `Guess between ${start} and ${end}`;
    document.getElementById("attemptsLeft").innerText = `Attempts left: ${attemptsLeft}`;
    document.getElementById("result").innerText = "";
}

function checkGuess() {
    let guess = parseInt(document.getElementById("guess").value);

    attemptsLeft--;

    if (guess < number) {
        document.getElementById("result").innerText = "Too Low ⬇️";
    } else if (guess > number) {
        document.getElementById("result").innerText = "Too High ⬆️";
    } else {
        document.getElementById("result").innerText = "🎉 Correct!";
        return;
    }

    document.getElementById("attemptsLeft").innerText = `Attempts left: ${attemptsLeft}`;

    if (attemptsLeft <= 0) {
        document.getElementById("result").innerText = `❌ You lost! Number was ${number}`;
    }
}