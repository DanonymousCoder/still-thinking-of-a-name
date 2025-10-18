let userInput = document.getElementById("user-input");
const key = document.querySelector(".key");
const clear = document.querySelector(".clear");

// key.addEventListener("click", firstMorse);
key.addEventListener("dblclick", secondMorse);
clear.addEventListener("click", clearMorse);

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
    console.log(userInput.value);
}


let clickTimer = null;

key.addEventListener("click", () => {
    clearTimeout(clickTimer);

    clickTimer = setTimeout(() => {
        userInput.value += "•";
        console.log(userInput.value);
    }, 500)
})