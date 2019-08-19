const game_board = document.getElementById("game_board");
let use_x = true;

function handleCellOnClick() {
    let r_index, c_index;
    //GET CLICKED ROW/COLUMN PARAMETERS
    for (let r = 0; r < game_board.rows.length; r++) {
        for (let c = 0; c < game_board.rows[r].cells.length; c++) {
            // return
            game_board.rows[r].cells[c].onclick = function () {
                r_index = this.parentElement.rowIndex;
                c_index = this.cellIndex;
                //console.log("R/C", [r_index, c_index]);
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
    if (game_board.rows[r_index].cells[c_index].innerHTML === "a") {
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

function checkWinConditions() {
    console.log('test');
    if (checkRows() === 1) {
        console.log('PLAYER 1 win')
    }
    else if(checkRows() === 2) {
        console.log('PLAYER 2 win')
    }
}

// let variables;
handleCellOnClick();
// console.log(variables);

// getTableRowAndColumnFromClick();
