const game_board = document.getElementById("game_board");
let use_x = true;

function handleCellOnClick() {
    let r_index, c_index;
    //GET CLICKED ROW/COLUMN PARAMNETERS
    for (let r = 0; r<game_board.rows.length; r++){
        for (let c = 0; c<game_board.rows[r].cells.length; c++){
            // return
            game_board.rows[r].cells[c].onclick = function () {
                r_index = this.parentElement.rowIndex;
                c_index = this.cellIndex;
                console.log("R/C", [r_index, c_index]);
                markCell(r_index,c_index);
            }
        }
    }
}

function markCell(r_index, c_index){
    let cell = game_board.rows[r_index].cells[c_index].innerHTML = use_x ? "X" : "0";
    use_x = !use_x;

}

// let variables;
handleCellOnClick();
// console.log(variables);

// getTableRowAndColumnFromClick();
