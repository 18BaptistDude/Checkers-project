var checkers = [
    {row: 1, cell: 2, color: 'white'},
    {row: 1, cell: 4, color: 'white'},
    {row: 1, cell: 6, color: 'white'},
    {row: 1, cell: 8, color: 'white'},
    {row: 2, cell: 1, color: 'white'},
    {row: 2, cell: 3, color: 'white'},
    {row: 2, cell: 5, color: 'white'},
    {row: 2, cell: 7, color: 'white'},
    {row: 3, cell: 2, color: 'white'},
    {row: 3, cell: 4, color: 'white'},
    {row: 3, cell: 6, color: 'white'},
    {row: 3, cell: 8, color: 'white'},
]

function renderBoard() {
    return ` 
        ${renderRow(1)}
        ${renderRow(2)}     
        ${renderRow(3)}
        ${renderRow(4)}
        ${renderRow(5)}
        ${renderRow(6)}
        ${renderRow(7)}
        ${renderRow(8)}
     `
}

function renderRow(rowNum) {
return `<div id="row-${rowNum}" class="row">
       ${renderCell(rowNum, 1)}
       ${renderCell(rowNum, 2)}
       ${renderCell(rowNum, 3)}
       ${renderCell(rowNum, 4)}
       ${renderCell(rowNum, 5)}
       ${renderCell(rowNum, 6)}
       ${renderCell(rowNum, 7)}
       ${renderCell(rowNum, 8)}    
       </div>`
}
function renderCell(rowNum, cellNum) {
        if (cellColor(rowNum, cellNum) === `grey`) {
    // black cell
    return `<div id="cell-${rowNum}-${cellNum}" class="cell black">${renderChecker (rowNum)}</div>`
    } else 
    // white cell 
    return `<div id="cell-${rowNum}-${cellNum}" class="cell white"></div>`
}   
function renderChecker (rowNum) {
    if (rowNum <= 3) {
      return `<div class="checker red-checker"></div>`   
    } else if (rowNum >= 6) {
      return `<div class="checker grey-checker"></div>`
    } else {
      return `<div class="checker grey-checker" hidden="true"></div>`
    }
}

/***Helper Methods***/
function parity(num) {
    return (num % 2 === 0) ? `even` : `odd`
}
function cellColor(rowNum, cellNum){
    return (parity(rowNum) === parity(cellNum)) ? `red` : `grey`
 
}
