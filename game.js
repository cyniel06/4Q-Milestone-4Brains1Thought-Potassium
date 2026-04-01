var words = ["WORDS", "MEOWS", "CRIES", "TRUNK", "BIKIE", "ETHYL", "HYDRA", 
    "QUEAL", "WHUMP", "VOXEL", "STRAY", "PEACE", "ALERT", "CRUDE", "PURSE", 
    "SHARE", "LIGHT", "RAMEN", "WRITE", "CRAVE", "LOVED", "SHINE"];
var randomIndex = Math.trunc(Math.random()*22);
var randomWord = words[randomIndex];
var col = 0;
var row = 0;
var rows = document.querySelectorAll(".row");
var gameOver = false;

console.log(randomWord);

function generateKeyboard(){
    for (let i = 65; i <= 90; i++){
        document.getElementById("keyboard").innerHTML +=
            `<button class="button" onclick="onKeyBtnClicked('${String.fromCharCode(i)}')">
                ${String.fromCharCode(i)}
            </button>`;
    }
}

function onKeyBtnClicked(key) {
    if(gameOver) return;
    
    console.log(key);
    if (col<5){
        rows[row].children[col].innerText=key;
        col++;
    }
}

function onButtonClickedEnter() {
    if (gameOver) return;
    if(col !== 5) return;

    let guess="";
    for(let i=0; i < 5 ; i++){
        guess += rows[row].children[i].innerText;
    }

    checkWord(guess);
}

function checkWord(guess){
    for(let i = 0; i < 5; i++){
        let box=rows[row].children[i];

        if(guess[i] === randomWord[i]){

            box.classList.add("correct");

        }else if(randomWord.includes(guess[i])){

            box.classList.add("present");

        }else{

            box.classList.add("absent");

        }
    }
    if (guess === randomWord){
    document.getElementById("Result").innerText = `Congratulations, You Win! The Alphabet Applauds You.`;
    gameOver = true;
    return;
    }

    row++;
    col=0;

    if (row === 5){
    document.getElementById("Result").innerText = `The Word Was ${randomWord}. Better Luck Next Round, CHALLENGER!`;
    gameOver = true;
}
}

function onButtonClickedDelete() {
    if (col>0){
        col--;
        rows[row].children[col].innerText="";
    }
}

function onButtonClickedReset() { 
    gameOver = false;
    row = 0;
    col = 0;
    randomIndex = Math.trunc(Math.random()*4);
    randomWord = words[randomIndex];
    console.log(randomWord);

    for (let r = 0; r < 5; r++) {
        for (let c = 0; c < 5; c++) {
            rows[r].children[c].innerText = "";
            rows[r].children[c].classList.remove("correct", "present", "absent");
        }
    }
    document.getElementById("Result").innerText = "";
}