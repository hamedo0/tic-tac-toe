/*------------------------ Cached Element References ------------------------*/
const squreEls = document.querySelectorAll('.sqr')
const resetBtnEl = document.querySelector('#reset')
const messageEl = document.querySelector('#message')

/*-------------------------------- Constants --------------------------------*/
const board = [
    '', '', '',
    '', '', '',
    '', '', ''
]

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // Diagonals
    [0, 4, 8],
    [2, 4, 6]
]

/*---------------------------- Variables (state) ----------------------------*/
let turn = 'X'
let winner = false
let tie = false


/*-------------------------------- Functions --------------------------------*/
function render() {
    updateBoard()
    updateMessage()
}

function updateBoard() {
    board.forEach((cell, index) => {
        squreEls[index].textContent = cell
    })
}

function updateMessage() {
    if (!winner && !tie) {
        messageEl.textContent = `Its ${turn} turn`
    } else if (!winner && tie) {
        messageEl.textContent = 'Its a Tie!'
    } else {
        messageEl.textContent = `${turn} Won!`
    }
}

function handleClick(event) {
    if (event.target.textContent) return;
    // already a winner for a game
    if (winner) return;
    const squreIndex = event.target.id

    placePiece(squreIndex)
    checkForWinner()
    checkForTie()
    switchPlayerTurn()
    updateBoard()
    updateMessage()
}

function placePiece(index) {
    board[index] = turn
    console.log(board)
}

function checkForWinner() {
    for (let combo of winningCombos) {
        console.log(combo)
        if (board[combo[0]] !== '' && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
            winner = true
        }
    }
    console.log('is winner: ', winner)
}

function checkForTie() {
    if (winner) return;

    // check for all items in array, if all truthy then its a tie
    tie = board.every((item) => item)

    console.log('is tie ', tie)
}

function switchPlayerTurn() {
    if (winner) return;

    if (turn === 'X') {
        turn = 'O'
    } else if (turn === 'O') {
        turn = 'X'
    }

    console.log('Current turn: ', turn)
}

function init() {
    turn = 'X'
    winner = false
    tie = false
    board.fill('')


    render()
}

init()
/*----------------------------- Event Listeners -----------------------------*/
for (let squreEl of squreEls) {
    squreEl.addEventListener('click', handleClick)
}

resetBtnEl.addEventListener('click', init)