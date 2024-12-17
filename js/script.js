// Generazione di numeri
const randomNumbers = [];
while (randomNumbers.length < 5) {
    const random = Math.floor(Math.random() * 99) + 1;
    if (!randomNumbers.includes(random)) {
        randomNumbers.push(random);
    }
}

// Mostra i numeri generati
const numbersDisplay = document.getElementById("numbers");
numbersDisplay.textContent = randomNumbers.join(", ");

// Timer
let timeLeft = 30;
const countdown = document.getElementById("countdown");
const inputSection = document.getElementById("input-section");

const timer = setInterval(() => {
    timeLeft--;
    countdown.textContent = timeLeft;

    if (timeLeft === 0) {
        clearInterval(timer);
        numbersDisplay.classList.add("hidden");
        inputSection.classList.remove("hidden");
    }
}, 1000);

// Verifica Numeri
document.getElementById("confirm-btn").addEventListener("click", function () {
    const userInputs = document.querySelectorAll(".user-input");
    const userNumbers = [];
    let valid = true;

    // Validazione input
    userInputs.forEach(input => {
        const value = parseInt(input.value.trim());
        if (isNaN(value) || value < 1 || value > 99) {
            input.classList.add("invalid");
            valid = false;
        } else {
            input.classList.remove("invalid");
            userNumbers.push(value);
        }
    });

    if (!valid) {
        alert("Alcuni numeri non sono validi. Inserisci numeri tra 1 e 99.");
        return;
    }

    // Controllo dei numeri indovinati
    const guessedNumbers = userNumbers.filter(num => randomNumbers.includes(num));
    const resultMessage = document.getElementById("result");
    resultMessage.textContent = `Hai indovinato ${guessedNumbers.length} numeri: (${guessedNumbers.join(", ")})`;
});
