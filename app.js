/*------------- Constants --------------------------------*/



/*--------- Variables (state) ----------------------------*/
let currentPlayer = 'X'
let isGameOver = false
let moveCount = 0

/*----- Cached Element References ------------------------*/
const messageEl = document.querySelector('#message')

const sqr0El = document.getElementById('0')
const sqr1El = document.getElementById('1')
const sqr2El = document.getElementById('2')
const sqr3El = document.getElementById('3')
const sqr4El = document.getElementById('4')
const sqr5El = document.getElementById('5')
const sqr6El = document.getElementById('6')
const sqr7El = document.getElementById('7')
const sqr8El = document.getElementById('8')

// console.log(sqr1El, sqr2El, sqr3El, sqr4El, sqr5El, sqr6El, sqr7El, sqr8El)

const resetBtnEl = document.getElementById('reset')
// console.log(resetBtnEl)

/*------------- Functions --------------------------------*/
messageEl.textContent = `It's ${currentPlayer}'s turn`


/*---------- Event Listeners -----------------------------*/
sqr0El.addEventListener('click', () => {

    if (sqr0El.textContent !== '' || isGameOver === true) {
        console.log('the square is not empty')
        return
    } else {
        sqr0El.textContent = currentPlayer
        moveCount++
        if (
            (sqr0El.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
            (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
            (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
            (sqr0El.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
            (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
            (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
            (sqr0El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
            (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
            ) {
            messageEl.textContent = `${currentPlayer} wins!`
            isGameOver = true
            return
        }
        if (moveCount === 9 && isGameOver === false) {
            messageEl.textContent = `It's a tie!`
            isGameOver = true
            return
        }

        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        } else {
            currentPlayer = 'X'
        }
        messageEl.textContent = `It's ${currentPlayer}'s turn`
    }
})
sqr1El.addEventListener('click', () => {
    if (sqr1El.textContent !== '' || isGameOver === true) {
        console.log('the square is not empty')
        return
    } else {
        sqr1El.textContent = currentPlayer
        moveCount++
        if (
            (sqr0El.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
            (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
            (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
            (sqr0El.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
            (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
            (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
            (sqr0El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
            (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
            ) {
            messageEl.textContent = `${currentPlayer} wins!`
            isGameOver = true
            return
        }
        if (moveCount === 9 && isGameOver === false) {
            messageEl.textContent = `It's a tie!`
            isGameOver = true
            return
        }
        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        } else {
            currentPlayer = 'X'
        }
        messageEl.textContent = `It's ${currentPlayer}'s turn`
    }
})
sqr2El.addEventListener('click', () => {
    if (sqr2El.textContent !== '' || isGameOver === true) {
        console.log('the square is not empty')
        return
    } else {
        sqr2El.textContent = currentPlayer
        moveCount++
        if (
            (sqr0El.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
            (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
            (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
            (sqr0El.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
            (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
            (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
            (sqr0El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
            (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
            ) {
            messageEl.textContent = `${currentPlayer} wins!`
            isGameOver = true
            return
        }
        if (moveCount === 9 && isGameOver === false) {
            messageEl.textContent = `It's a tie!`
            isGameOver = true
            return
        }
        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        } else {
            currentPlayer = 'X'
        }
        messageEl.textContent = `It's ${currentPlayer}'s turn`
    }
})
sqr3El.addEventListener('click', () => {
    if (sqr3El.textContent !== '' || isGameOver === true) {
        console.log('the square is not empty')
        return
    } else {
        sqr3El.textContent = currentPlayer
        moveCount++
        if (
            (sqr0El.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
            (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
            (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
            (sqr0El.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
            (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
            (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
            (sqr0El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
            (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
            ) {
            messageEl.textContent = `${currentPlayer} wins!`
            isGameOver = true
            return
        }
        if (moveCount === 9 && isGameOver === false) {
            messageEl.textContent = `It's a tie!`
            isGameOver = true
            return
        }
        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        } else {
            currentPlayer = 'X'
        }
        messageEl.textContent = `It's ${currentPlayer}'s turn`
    }
})
sqr4El.addEventListener('click', () => {
    if (sqr4El.textContent !== '' || isGameOver === true) {
        console.log('the square is not empty')
        return
    } else {
        sqr4El.textContent = currentPlayer
        moveCount++
        if (
            (sqr0El.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
            (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
            (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
            (sqr0El.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
            (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
            (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
            (sqr0El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
            (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
            ) {
            messageEl.textContent = `${currentPlayer} wins!`
            isGameOver = true
            return
        }
        if (moveCount === 9 && isGameOver === false) {
            messageEl.textContent = `It's a tie!`
            isGameOver = true
            return
        }
        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        } else {
            currentPlayer = 'X'
        }
        messageEl.textContent = `It's ${currentPlayer}'s turn`
    }
})
sqr5El.addEventListener('click', () => {
    if (sqr5El.textContent !== '' || isGameOver === true) {
        console.log('the square is not empty')
        return
    } else {
        sqr5El.textContent = currentPlayer
        moveCount++
        if (
            (sqr0El.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
            (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
            (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
            (sqr0El.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
            (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
            (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
            (sqr0El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
            (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
            ) {
            messageEl.textContent = `${currentPlayer} wins!`
            isGameOver = true
            return
        }
        if (moveCount === 9 && isGameOver === false) {
            messageEl.textContent = `It's a tie!`
            isGameOver = true
            return
        }
        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        } else {
            currentPlayer = 'X'
        }
        messageEl.textContent = `It's ${currentPlayer}'s turn`
    }
})
sqr6El.addEventListener('click', () => {
    if (sqr6El.textContent !== '' || isGameOver === true) {
        console.log('the square is not empty')
        return
    } else {
        sqr6El.textContent = currentPlayer
        moveCount++
        if (
            (sqr0El.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
            (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
            (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
            (sqr0El.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
            (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
            (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
            (sqr0El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
            (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
            ) {
            messageEl.textContent = `${currentPlayer} wins!`
            isGameOver = true
            return
        }
        if (moveCount === 9 && isGameOver === false) {
            messageEl.textContent = `It's a tie!`
            isGameOver = true
            return
        }
        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        } else {
            currentPlayer = 'X'
        }
        messageEl.textContent = `It's ${currentPlayer}'s turn`
    }
})
sqr7El.addEventListener('click', () => {
    if (sqr7El.textContent !== '' || isGameOver === true) {
        console.log('the square is not empty')
        return
    } else {
        sqr7El.textContent = currentPlayer
        moveCount++
        if (
            (sqr0El.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
            (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
            (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
            (sqr0El.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
            (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
            (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
            (sqr0El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
            (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
            ) {
            messageEl.textContent = `${currentPlayer} wins!`
            isGameOver = true
            return
        }
        if (moveCount === 9 && isGameOver === false) {
            messageEl.textContent = `It's a tie!`
            isGameOver = true
            return
        }
        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        } else {
            currentPlayer = 'X'
        }
        messageEl.textContent = `It's ${currentPlayer}'s turn`
    }
})
sqr8El.addEventListener('click', () => {
    if (sqr8El.textContent !== '' || isGameOver === true) {
        console.log('the square is not empty')
        return
    } else {
        sqr8El.textContent = currentPlayer
        moveCount++
        if (
            (sqr0El.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
            (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
            (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
            (sqr0El.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
            (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
            (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
            (sqr0El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
            (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
            ) {
            messageEl.textContent = `${currentPlayer} wins!`
            isGameOver = true
            return
        }
        if (moveCount === 9 && isGameOver === false) {
            messageEl.textContent = `It's a tie!`
            isGameOver = true
            return
        }
        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        } else {
            currentPlayer = 'X'
        }
        messageEl.textContent = `It's ${currentPlayer}'s turn`
    }
})

resetBtnEl.addEventListener('click', () => {
    sqr0El.textContent = ''
    sqr1El.textContent = ''
    sqr2El.textContent = ''
    sqr3El.textContent = ''
    sqr4El.textContent = ''
    sqr5El.textContent = ''
    sqr6El.textContent = ''
    sqr7El.textContent = ''
    sqr8El.textContent = ''

    currentPlayer = 'X'
    isGameOver = false
    moveCount = 0

    messageEl.textContent = `It's ${currentPlayer}'s turn`
})