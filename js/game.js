const countdown = document.getElementById("countdown");
const clearOne = document.getElementById("clear-asignal");
const clear = document.querySelector(".clear");
let userInput = document.getElementById("user-input");
const sendSignalMain = document.getElementById("send-signal-main");
const enterSignal = document.getElementById("enter-signal");
const gameWord = document.getElementById("word-original");
let nextQ = document.getElementById("next-q");


const morseCode = {
    a: "•–", b: "–•••", c: "–•–•", d: "–••", e: "•", f: "••–•", g: "––•", h: "••••", i: "••", j: "•–––", k: "–•–", l: "•–••", m: "––", n: "–•", o: "–––", p: "•––•",
    q: "––•–", r: "•–•", s: "•••", t: "–", u: "••–", v: "•••–", w: "•––", x: "–••–", y: "–•––", z: "––••", 1: "•––––", 2: "••–––", 3: "•••––", 4: "••••–", 5: "•••••",
    6: "–••••", 7: "––•••", 8: "–––••", 9: "–––c•", 0: "–––––"
}




clearOne.addEventListener("click", clearOneMorse);
clear.addEventListener("click", clearMorse);
sendSignalMain.addEventListener("click", submitMorse);

nextQ.addEventListener("click", () => {
    if (countTimer) {
        return;
    }
    gamePageWord();
});


let clickTimer = "";

enterSignal.addEventListener("click", () => {
    clearTimeout(clickTimer);

    clickTimer = setTimeout(() => {
        userInput.value += "•"
    }, 500)
})

enterSignal.addEventListener("dblclick", () => {
    clearTimeout(clickTimer);

    userInput.value += "–"
})


function clearOneMorse() {
    let lastVal = userInput.value.length - 1;

    let nEw = "";

    for (let i = 0; i < lastVal; i++) {
        nEw += userInput.value[i]
    }

    userInput.value = nEw;
}



const randomWords = ["sos", "cat", "cup", "cap", "alpha", "bravo", "bow", "404", "200", "999", "1"];

let countTimer = null;

function gamePageWord() {
    if (countTimer) {
        clearInterval(countTimer);
    }

    nextQ.disabled = true;
    userInput.style.background = "transparent";
    userInput.value = "";

    let randomWord = Math.floor(Math.random() * randomWords.length);
    gameWord.textContent = randomWords[randomWord];

    let count = 90;
    countdown.textContent = count;

    countTimer = setInterval(function () {
        count--;
        console.log(count);

        countdown.textContent = count;

        if (count <= 0) {
            clearInterval(countTimer);
            countTimer = null;
            nextQ.disabled = false;

            submitMorse();
        }
    }, 1000);
}

function submitMorse() {
    let check = "";

    for (let i = 0; i < gameWord.textContent.length; i++) {
        let eachMorse = gameWord.textContent[i];
        check += morseCode[eachMorse]
    }

    console.log(check);

    if (userInput.value == "") {
        userInput.style.backgroundColor = "red";
    }
    else if (userInput.value == check) {
        userInput.style.backgroundColor = "green";
    } else {
        userInput.style.backgroundColor = "red";
    }

}


function clearMorse() {
    userInput.value = "";
    userInput.style.background = "transparent";
    console.log(userInput.value);
}



document.addEventListener('DOMContentLoaded', () => {
    gamePageWord();
})