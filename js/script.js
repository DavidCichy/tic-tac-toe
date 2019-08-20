const game_board = document.getElementById("game_board");
let use_x = true;

function handleCellOnClick() {
    let r_index, c_index;
    for (let r = 0; r < game_board.rows.length; r++) {
        for (let c = 0; c < game_board.rows[r].cells.length; c++) {
            // return
            game_board.rows[r].cells[c].onclick = function () {
                r_index = this.parentElement.rowIndex;
                c_index = this.cellIndex;
                checkCell(r_index, c_index);
            }
        }
    }
}

function markCell(r_index, c_index) {
    game_board.rows[r_index].cells[c_index].innerHTML = use_x ? "X" : "O";
    use_x = !use_x;

}

function checkCell(r_index, c_index) {
    console.log(game_board.rows[r_index].cells[c_index].innerHTML);
    if (game_board.rows[r_index].cells[c_index].innerHTML === "") {
        markCell(r_index, c_index);
        checkWinConditions();
    }
}

function checkRows() {
    let player1 = 0;
    let player2 = 0;
    for (let r = 0; r < game_board.rows.length; r++) {
        for (let c = 0; c < game_board.rows[r].cells.length; c++) {
            if (game_board.rows[r].cells[c].innerHTML === 'X') {
                player1 += 1;
            }
            if (game_board.rows[r].cells[c].innerHTML === 'O') {
                player2 += 1;
            }
            if (player1 === 3) {
                return 1;
            }
            if (player2 === 3) {
                return 2;
            }
        }
        player1 = 0;
        player2 = 0;
    }
}

function checkDiagonal() {
    let player1 = 0;
    let player2 = 0;

    let leftDiagonal = 0;
    let rightDiagonal = 0;
    for (let r = 0; r < game_board.rows.length; r++) {
        if (game_board.rows[r].cells[leftDiagonal].innerHTML === 'X') {
            player1 += 1;
        }
        if (game_board.rows[r].cells[leftDiagonal].innerHTML === 'O') {
            player2 += 1;
        }
        leftDiagonal += 1;
    }

    if (player1 === 3) {
        return 1;
    }
    if (player2 === 3) {
        return 2;
    }

    player1 = 0;
    player2 = 0;

    for (let r = (game_board.rows.length - 1); r >= 0; r--) {
        if (game_board.rows[r].cells[rightDiagonal].innerHTML === 'X') {
            player1 += 1;
        }
        if (game_board.rows[r].cells[rightDiagonal].innerHTML === 'O') {
            player2 += 1;
        }
        rightDiagonal += 1;

    }

    if (player1 === 3) {
        return 1;
    }
    if (player2 === 3) {
        return 2;
    }
}

function checkColumns() {
    let player1 = 0;
    let player2 = 0;

    for (let column = 0; column < game_board.rows.length; column++) {
        for (let itemIndex = 0; itemIndex < game_board.rows.length; itemIndex++) {
            if (game_board.rows[itemIndex].cells[column].innerHTML === 'X') {
                player1 += 1;
            }
            if (game_board.rows[itemIndex].cells[column].innerHTML === 'O') {
                player2 += 1;
            }
        }

        if (player1 === 3) {
            return 1;
        }
        if (player2 === 3) {
            return 2;
        }
        player1 = 0;
        player2 = 0;

    }
}

function checkWinConditions() {
    console.log('test');
    if (checkRows() === 1) {
        removeAL();
        alert('Player 1 win');
        console.log('PLAYER 1 win')
    } else if (checkRows() === 2) {
        removeAL();
        alert('Player 2 win');
        console.log('PLAYER 2 win')
    }

    if (checkDiagonal() === 1) {
        removeAL();
        alert('Player 1 win');
        console.log('PLAYER 1 win')
    } else if (checkDiagonal() === 2) {
        removeAL();
        alert('Player 2 win');
        console.log('PLAYER 2 win')
    }

    if (checkColumns() === 1) {
        removeAL();
        alert('Player 1 win');
        console.log('PLAYER 1 win');
    } else if (checkColumns() === 2) {
        removeAL();
        alert('Player 2 win');
        console.log('PLAYER 2 win')
    }

}

function removeAL() {
    console.log('test break');
    for (let r = 0; r < game_board.rows.length; r++) {
        for (let c = 0; c < game_board.rows[r].cells.length; c++) {
            // return
            game_board.rows[r].cells[c].onclick = null;
        }
    }
}
handleCellOnClick();

