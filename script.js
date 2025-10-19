let userInput = document.getElementById("user-input");
let givenWord = document.getElementById("word-t");
const key = document.getElementById("enter-signal");
const sendSignal = document.getElementById("send-signal");
const clear = document.querySelector(".clear");
const nextQ = document.getElementById("next-q");
const clearOne = document.getElementById("clear-asignal");
const gameWord = document.getElementById("word-original");
const countdown = document.getElementById("countdown");

const morseCode = {
    a: "•–", b: "–•••", c: "–•–•", d: "–••", e: "•", f: "••–•", g: "––•", h: "••••", i: "••", j: "•–––", k: "–•–", l: "•–••", m: "––", n: "–•", o: "–––", p: "•––•",
    q: "––•–", r: "•–•", s: "•••", t: "–", u: "••–", v: "•••–", w: "•––", x: "–••–", y: "–•––", z: "––••"
}


// key.addEventListener("click", firstMorse);

let clickTimer = null;

key.addEventListener("click", () => {
    clearTimeout(clickTimer);

    clickTimer = setTimeout(() => {
        userInput.value += "•";
        console.log(userInput.value);
    }, 500)
});



key.addEventListener("dblclick", secondMorse);

clear.addEventListener("click", clearMorse);
clearOne.addEventListener("click", clearOneMorse);

sendSignal.addEventListener("click", submitMorse);
nextQ.addEventListener("click", generateRandomWord);
nextQ.addEventListener("click", gamePageWord);


function init() {
    generateRandomWord();
    gamePageWord();
}

function firstMorse() {
    userInput.value += "•";
    console.log(userInput.value);
}

function secondMorse() {
    clearTimeout(clickTimer)

    userInput.value += "–";
    console.log(userInput.value)
}

function clearMorse() {
    userInput.value = "";
    userInput.style.background = "transparent";
    console.log(userInput.value);
}

function clearOneMorse() {
    let lastVal = userInput.value.length - 1;

    let nEw = "";

    for (let i = 0; i < lastVal; i++) {
        nEw += userInput.value[i]
    }

    userInput.value = nEw;
}

function submitMorse() {
    let check = "";

    for (let i = 0; i < givenWord.length; i++) {
        let eachMorse = givenWord[i];
        check += morseCode[eachMorse]
    }

    console.log(check);

    if (userInput.value == check) {
        userInput.style.backgroundColor = "green";
    } else {
        userInput.style.backgroundColor = "red";
    }
}



const randomWords = ["sos", "cat", "cup", "cap", "alpha", "bravo", "bow", "404", "200", "999", "1"];

function generateRandomWord() {
    userInput.style.background = "transparent";
    let randomWord = Math.floor(Math.random() * randomWords.length);

    givenWord.textContent = randomWords[randomWord];
    return randomWords[randomWord];
}

function gamePageWord() {
    let randomWord = Math.floor(Math.random() * randomWords.length);
    gameWord.textContent = randomWords[randomWord];
}

let count = document.getElementById("countdown");

const countTimer = setInterval(function () {
    count--;

    document.getElementById("countdown").textContent = count;
})


window.onload = init();