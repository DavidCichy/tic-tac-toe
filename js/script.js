const game_board = document.getElementById("game_board");
let use_x = true;

function handleCellOnClick() {
    let r_index, c_index;
    //GET CLICKED ROW/COLUMN PARAMETERS
    for (let r = 0; r<game_board.rows.length; r++){
        for (let c = 0; c<game_board.rows[r].cells.length; c++){
            // return
            game_board.rows[r].cells[c].onclick = function () {
                r_index = this.parentElement.rowIndex;
                c_index = this.cellIndex;
                //console.log("R/C", [r_index, c_index]);
                checkCell(r_index,c_index);
            }
        }
    }
}

function markCell(r_index, c_index){
    game_board.rows[r_index].cells[c_index].innerHTML = use_x ? "X" : "0";
    use_x = !use_x;

}

function checkCell(r_index, c_index) {
    console.log(game_board.rows[r_index].cells[c_index].innerHTML);
    if(game_board.rows[r_index].cells[c_index].innerHTML === "a"){
        markCell(r_index,c_index);
    }
}

// let variables;
handleCellOnClick();
// console.log(variables);

// getTableRowAndColumnFromClick();
