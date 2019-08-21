const body = document.getElementsByTagName("body")[0];
console.log(body);
const game = document.getElementsByClassName("game")[0];
const game_board = document.getElementById("game_board");

let use_x = true;

function create_grid(){
    for (let row=0;row<3;row++){
        let tr = document.createElement("tr");
        game_board.appendChild(tr);
        for (let col=0;col<3;col++) {
            let td = document.createElement("td");
            tr.appendChild(td);
        }
        game_board.appendChild(tr);
    }

    let reset_button = document.createElement("button");
    reset_button.innerHTML = "RESTART";
    reset_button.setAttribute("class", "reset_button");
    reset_button.setAttribute("id", "reset_button");
    reset_button.setAttribute("onclick", "reset_board()");
    body.appendChild(reset_button);
    handleCellOnClick();
}

function reset_board() {
    game_board.innerHTML="";
    document.getElementById("reset_button").parentNode.removeChild(document.getElementById("reset_button"));
    create_grid();

}

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

function clear_table(){
    game_board.innerHTML = "";
    create_grid();
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

function checkWinConditions() {
    console.log('test');
    if (checkRows() === 1) {
        console.log('PLAYER 1 win')
    } else if (checkRows() === 2) {
        console.log('PLAYER 2 win')
    }

    if (checkDiagonal() === 1) {
        console.log('PLAYER 1 win')
    } else if (checkDiagonal() === 2) {
        console.log('PLAYER 2 win')
    }
}

function main(){

    create_grid();
    checkDiagonal();

}

main();
