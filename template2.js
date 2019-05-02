function cellTemplate(rowNum, cellNum) {
    var isCellEven = true
    var isRowEven = true    
    if (cellNum % 2 == 1) isCellEven = false
    if (rowNum % 2 == 1) isRowEven = false

    if (isCellEven != isRowEven) {
        // black cell
        let cellString = `<div id="cell-${rowNum}-${cellNum}" class="cell black">`
        if (rowNum <=3) {
              cellString = cellString + `<div class="checker red-checker"></div>
              <div class="checker grey-checker" hidden></div>` 
        } else if (rowNum >= 6) {
            cellString = cellString + `<div class="checker grey-checker"></div>
              <div class="checker grey-checker" hidden></div>`
        } else {
            cellString = cellString + `<div class="checker grey-checker"></div><div class="checker grey-checker" hidden></div>`  
        }
        cellString = cellString + `</div>`
        return cellString
        } else
        // white cell
         return `<div id="cell-${rowNum}-${cellNum}" class="cell crimson"></div>`
}

function rowTemplate(rowNum) {
    console.log(`drawing row number ${rowNum}`)
    var rowString = ''
    rowString = rowString + `<div id="row-${rowNum}" class="row">`
    for (var cellNum=1; cellNum<=8; cellNum++) {
        rowString = rowString + cellTemplate(rowNum, cellNum)
    }
    rowString = rowString + `</div>`
    return rowString
}

function boardTemplate() {
    var boardString = ''
    for (var rowNum=1; rowNum<=8; rowNum++) {
        boardString = boardString + rowTemplate(rowNum)
    }
    return boardString
}