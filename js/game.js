const countdown = document.getElementById("countdown");
const clearOne = document.getElementById("clear-asignal");
let userInput = document.getElementById("user-input");
const sendSignalMain = document.getElementById("send-signal-main");
const gameWord = document.getElementById("word-original");
const nextQ = document.getElementById("next-q");


alert(typeof gameWord);

const morseCode = {
    a: "•–", b: "–•••", c: "–•–•", d: "–••", e: "•", f: "••–•", g: "––•", h: "••••", i: "••", j: "•–––", k: "–•–", l: "•–••", m: "––", n: "–•", o: "–––", p: "•––•",
    q: "––•–", r: "•–•", s: "•••", t: "–", u: "••–", v: "•••–", w: "•––", x: "–••–", y: "–•––", z: "––••", 1: "•––––", 2: "••–––", 3: "•••––", 4: "••••–", 5: "•••••",
    6: "–••••", 7: "––•••", 8: "–––••", 9: "––––•", 0: "–––––"
}




clearOne.addEventListener("click", clearOneMorse);
sendSignalMain.addEventListener("click", submitMorse)

nextQ.addEventListener("click", gamePageWord);


function clearOneMorse() {
    let lastVal = userInput.value.length - 1;

    let nEw = "";

    for (let i = 0; i < lastVal; i++) {
        nEw += userInput.value[i]
    }

    userInput.value = nEw;
}



const randomWords = ["sos", "cat", "cup", "cap", "alpha", "bravo", "bow", "404", "200", "999", "1"];


function gamePageWord() {
    userInput.style.background = "transparent";
    let randomWord = Math.floor(Math.random() * randomWords.length);

    gameWord.textContent = randomWords[randomWord];
}

function submitMorse() {
    let check = "";

    alert(givenWord);

    for (let i = 0; i < gameWord.length; i++) {
        let eachMorse = gameWord[i];
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

let count = 10;

const countTimer = setInterval(function () {
    count--;
    console.log(count);

    document.getElementById("countdown").textContent = count;

    if (count <= 0) {
        clearInterval(countTimer);

        let check = "";

        for (let i = 0; i < gameWord.length; i++) {
            let eachMorse = gameWord[i];
            check += morseCode[eachMorse]
        }

        console.log(check);

        if (userInput.value == check) {
            userInput.style.backgroundColor = "green";
        } else {
            userInput.style.backgroundColor = "red";
        }
    }
}, 1000)


document.addEventListener('DOMContentLoaded', () => {
    gamePageWord();
})