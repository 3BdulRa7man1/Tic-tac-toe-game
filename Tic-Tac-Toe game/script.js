const grid = document.getElementById('grid');
const sign = 'xo';
let turn = 0;

let currentPlayer = 'x';

const cells = document.getElementsByClassName('cell');

let winnigMessage = document.getElementById('message-place');
let winnigBlock = document.getElementById('alert-message');



// ==== to write in the grid ===//
grid.addEventListener('click',(clickEvent)=>{
    let clickedCell = clickEvent.target;
    
    if (clickedCell.innerText == '') {
        if (turn%2 == 0) {
            turn++
            clickedCell.innerText = sign[0];
            let xClass = 'xClass'
            clickedCell.classList += ` ${xClass}`;

            // ==== checking for winning ==== //

            currentPlayer = sign[0];
        }
        else if(turn%2 !== 0){
            turn++
            clickedCell.innerText = sign[1];
            let oClass = 'oClass';
            clickedCell.classList += ` ${oClass}`;

            // ==== checking for winning ==== //
            checkWinningConditions('o', 'O is here');
            currentPlayer = sign[1];
        }
    }
    
    
});


// ==== to declare winnig for player ==== //

grid.addEventListener('click',()=>{
    if (checkWinningConditions(currentPlayer) == true) {
        declareWinning(currentPlayer);
    }
    else{
        // declareDraw()
    }
});

//==== to clear the grid and restart the game ====//

let restart = document.getElementById('restart');

restart.addEventListener('click',clearGrid);
restart.addEventListener('click',()=>restart.style += 'border: none;')
function clearGrid() {
    let cellList = document.getElementsByClassName('cell');
    for (let i = 0; i < cellList.length; i++) {
        const cell = cellList[i];
        cell.innerText = '';
    }
    turn = 0;
    winnigBlock.style.display = 'none';
}


//==== to check winning, losing or draw ====//

let winnigConditons = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];
function checkWinningConditions(playedSgin) {

        return winnigConditons.some(condition =>{
            return condition.every((index) =>{
                return cells[index].innerText == playedSgin;
            });
        });
}

function declareWinning(currentPlayer) {
    winnigBlock.style.display = 'flex';
    winnigMessage.innerText = `${currentPlayer} Won`;
}

function checkDraw() {

}

function declareDraw() {
    winnigBlock.style.display = 'flex';
    winnigMessage.innerText = 'draw';
}


// function abracadabra() {
    
// }