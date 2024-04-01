const playerX = 'X';
const playerO = 'O';
let currentPlayer = playerX;
let isGameOver = false;
let clickCount = 0;

const boxes = document.querySelectorAll('.square');
document.querySelector("#one").style.borderColor = "white";

boxes.forEach(box => {
    box.innerHTML = "";
    box.addEventListener("click", () => {
        if (!isGameOver && box.innerHTML === "") {
            box.innerHTML = currentPlayer;
            clickCount++;
            checkWin();   
            checkDraw();        
            changeTurn(); 
            if (currentPlayer === playerX) {
                box.style.color = "#ffd036"; 
            }
        }
    })
})

function changeTurn(){
    if (clickCount % 2 !== 0) {
        document.querySelector("#two").style.borderColor = "white";
        document.querySelector("#one").style.borderColor = "#2b135a"; 
        currentPlayer = playerO;
    } else {
        document.querySelector("#two").style.borderColor = "#2b135a"; 
        document.querySelector("#one").style.borderColor = "white";
        currentPlayer = playerX;
    }
}

function checkWin(){
    let winConditions =[
        [0,1,2] ,[3,4,5] , [6,7,8],
        [0,3, 6] , [1 ,4 ,7], [2, 5, 8],
        [0, 4,8], [2,4,6]
    ]
    for(let i = 0 ; i < winConditions.length ; i++){
        let v0 = boxes[winConditions[i][0]].innerHTML;
        let v1 = boxes[winConditions[i][1]].innerHTML;
        let v2 = boxes[winConditions[i][2]].innerHTML;
        if(v0 != "" && v0 === v1 && v0 ===v2 ){
            isGameOver = true;
            document.querySelector(".score").innerHTML = currentPlayer +" WIN!";
            document.querySelector(".playAgain").style.display = "inline";
            for(j = 0; j < 3 ; j++){
                boxes[winConditions[i][j]].style.backgroundColor ="#512B81";
            }
        }
    }
}
let isDraw = false;
function checkDraw(){
    if(!isGameOver){   
        isDraw = true;     
        boxes.forEach(e =>{
            if(e.innerHTML === "") 
            isDraw = false;
        });
    }
    if(isDraw){
        isGameOver = true;
        document.querySelector(".score").innerHTML = "DRAW!";
        document.querySelector(".playAgain").style.display = "inline";
    }
}
document.querySelector(".playAgain").addEventListener("click" , function(){
    isGameOver = false;
    currentPlayer = playerX;
    clickCount = 0;
    document.querySelector(".score").innerHTML = ""; 
    boxes.forEach(box => {
        box.innerHTML = "";
        box.style.backgroundColor = "#2b135a";
        document.querySelector("#one").style.borderColor = "white";
        document.querySelector("#two").style.borderColor = "#2b135a";
        if (currentPlayer === playerX) {
            box.style.color = "#FF407D"; 
        }
    });
})
