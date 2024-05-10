let words = ["assess",
    "better",
    "cattle",
    "cuddle",
    "defend",
    "diffed",
    "effete",
    "progress",
    "feeler",
    "holler",
    "inlet",
    "juggle",
    "killer",
    "little",
    "middle",
    "mutter",
    "muzzle",
    "needle",
    "noodle",
    "paddle",
    "puppet",
    "quiver",
    "rattle",
    "redder",
    "seethe",
    "sesses",
    "sizzle",
    "succeed",
    "tattle",
    "tender",
    "terrier",
    "tiller",
    "tunnel",
    "utter",
    "vessel",
    "violet",
    "waffle",
    "weeded",
    "weller",
    "whopper",
    "wrestle",
    "yellow",
    "yelled",
    "yipped",
    "zeppelin"
]

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function frequency(arr, ele) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            count = count + 1;
        }
    }
    return count;
}

let gameEl = document.getElementById("game");
let mainEl = document.getElementById("main");
let userInputEls = document.getElementById("userInput");
let checkEl = document.getElementById("check");
let error_message = document.getElementById("error_message");
let innerCardContainer = document.getElementById("innerCardContainer");
let innerCard = document.getElementById("innerCard");
let ouputEl = document.getElementById("output");
let resultEL = document.getElementById("result");

function reset() {
    let guessed_word = [];
    let randomInt = getRandomInt(1, 25);
    let selected_word = words[randomInt];
    console.log(selected_word);
    let length_of_selected_word = selected_word.length;
    for (let i = 0; i < length_of_selected_word; i++) {
        guessed_word.push("_");
    }
    let life = 4;
    let letters = [];
    console.log(guessed_word);
}

function start() {
    mainEl.classList.add("d-none");
    gameEl.classList.remove("d-none");
}
let userInputEl = userInputEls.value;
console.log(userInputEl);
let guessed_word = [];
let randomInt = getRandomInt(1, 25);
let selected_word = words[randomInt];
console.log(selected_word);
let length_of_selected_word = selected_word.length;
for (let i = 0; i < length_of_selected_word; i++) {
    guessed_word.push("_");
}
let life = 4;
let letters = [];
console.log(guessed_word);

function process() {
    userInputEl = userInputEls.value;
    selected_word.split("");
    if (userInputEl.length !== 1 || userInputEl === "") {
        error_message.textContent = "Enter only an alphabet";
    }
    if (guessed_word.includes("_") && life >= 1) {
        if (selected_word.includes(userInputEl) === false) {
            life = life - 1;
            alert("You Lost a Life");
        } else {
            userInputEl = userInputEls.value;
            letters.push(userInputEl);
            if (letters.includes(userInputEl)) {
                let num = frequency(letters, userInputEl);
                if (num >= 2) {
                    alert("Already Guessed");
                }
            }
        }
        userInputEl = userInputEls.value;
        console.log(userInputEl);
        console.log(selected_word[0]);
        for (let i = 0; i < length_of_selected_word; i++) {
            if (selected_word[i] === userInputEl) {
                guessed_word[i] = selected_word[i];
            }
        }
        console.log(guessed_word);
        let list = document.createElement("li");
        list.textContent = guessed_word;
        innerCardContainer.classList.add("inner-card");
        innerCard.appendChild(list);
    } else if (life <= 0) {
        ouputEl.textContent = "You Loose!";
        ouputEl.classList.add("loose");
        resultEL.classList.add("inner-para");
        resultEL.textContent = "The word is " + selected_word;
        reset();
    } else if (guessed_word.includes("_") === false) {
        ouputEl.textContent = "You Win!";
        ouputEl.classList.add("win");
        resultEL.classList.add("inner-para");
        resultEL.textContent = "The word is " + selected_word;
        reset();
    }
}

checkEl.addEventListener("click", process);