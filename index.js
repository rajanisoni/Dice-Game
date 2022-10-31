// Skypack confetti CDN
import confetti from 'https://cdn.skypack.dev/canvas-confetti';


// declearations
const mainHeading = document.getElementById("result-h1");
const dice1 = document.getElementById("Dice1");
const dice2 = document.getElementById("Dice2");




// Roll-btn
const rollBtn = document.getElementById("btn-roll")
rollBtn.addEventListener("click", function () {


    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;


    let randomImageSource1 = "images/dice" + randomNumber1 + ".png";
    let randomImageSource2 = "images/dice" + randomNumber2 + ".png";



    dice1.setAttribute("src", randomImageSource1);
    dice2.setAttribute("src", randomImageSource2);



    if (randomNumber1 > randomNumber2) {
        mainHeading.innerHTML = `${renderEmoji()} Player 1 Wins ${renderEmoji()}`;
        const myTimeout = setTimeout(confetti, 250);
    }


    else if (randomNumber2 > randomNumber1) {
        mainHeading.innerHTML = `${renderEmoji()} Player 2 Wins ${renderEmoji()}`;
        setTimeout(confetti, 250);
    }


    else {
        mainHeading.innerHTML = "😵Draw🥴"
    }
})


// refresh-Btn
let refreshBtn = document.getElementById("btn-refresh")
refreshBtn.addEventListener("click", function () {

    mainHeading.innerText = "🎲 Roll It! 🎲"
    dice1.setAttribute("src", "images/dice6.png");
    dice2.setAttribute("src", "images/dice6.png");
})



// Emoji-rendering
function renderEmoji() {

    let emojiArr = ["🎉", "😎", "🎆", "🎇", "✨", "🎊", "🎡", "🎀", "🏆", "🥇", "🌟", "🌈", "💥"]
    let randomEmojiNumber = Math.floor(Math.random() * (emojiArr.length - 1)) + 1;
    return (emojiArr[randomEmojiNumber])

}



