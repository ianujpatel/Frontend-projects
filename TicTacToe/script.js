const cells = document.querySelectorAll('.cell');
const restartBtn = document.querySelector('.restart');
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
let currentPlayer = 'X';

const checkWin = () => {
    let winner = null;
    winningCombinations.forEach(combo => {
        const [a, b, c] = combo;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            winner = cells[a].textContent;
            [cells[a], cells[b], cells[c]].forEach(cell => cell.classList.add('win'));
        }
    });
    return winner;
};

const handleClick = (event) => {
    if (event.target.textContent === '') {
        event.target.textContent = currentPlayer;
        if (checkWin()) {
            setTimeout(resetGame, 2000);
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
};

const resetGame = () => {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('win');
    });
    currentPlayer = 'X';
};

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartBtn.addEventListener('click', resetGame);
