// Função para criar os números caindo
function createFallingNumbers() {
    const container = document.querySelector(".container");
    const numbersDiv = document.createElement("div");
    numbersDiv.classList.add("numbers");

    for (let i = 0; i < 100; i++) {
        const number = document.createElement("span");
        number.classList.add("number");
        number.style.left = `${Math.random() * 100}%`;
        number.style.animationDuration = `${5 + Math.random() * 5}s`;
        number.textContent = Math.floor(Math.random() * 10);
        numbersDiv.appendChild(number);
    }

    container.appendChild(numbersDiv);
}

createFallingNumbers();
