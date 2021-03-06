$(document).ready(function() {
  console.log('document ready')
  $('#board-container').html(renderBoard())
  renderCheckers()
       
})

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
    return `<div id="cell-${rowNum}-${cellNum}" class="cell black"></div>`
} else 
  return `<div id="cell-${rowNum}-${cellNum}" class="cell white"></div>`
}

function parity(num) {
    return (num % 2 === 0) ? `even` : `odd`
}
function cellColor(rowNum, cellNum){
    return (parity(rowNum) === parity(cellNum)) ? `red` : `grey`
 
}


function moveSelectedcheckerHere() {
     console.log(`things`)
     if (selectedChecker) {
     console.log(`move selected checker here`)
     let blackCell = $(this)
     console.log(`blackCell: `, blackCell)
     let id = blackCell.attr('id')
     console.log(`id: `, id)
     let idParts = id.split('-')
     console.log(`idParts =`, idParts)
     selectedChecker.row = idParts[1]
     selectedChecker.cell = idParts[2]
     selectedChecker = undefined
     renderCheckers()
    } else {
        console.log(`select a checker, foo!`)   
     }   
         
}

function clearBoard() {
    $(`.black.cell`).html(``)
    $(`.black.cell`).unbind('click')
}











