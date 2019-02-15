function renderCell (rowNum, cellNum) {
    if (determineColor(rowNum, cellNum) === 'grey') { 
        // add a black cell
        let cellString = `<div id="cell-${rowNum}-${cellNum}" class="cell black">`
        if (rowNum <=3) {
              cellString = cellString + renderChecker(`red`) 
        } else if (rowNum >= 6) {
            cellString = cellString + renderChecker(`grey`)
        } else {
            cellString = cellString + renderChecker(`grey` , `hidden`)  
        }
        cellString = cellString + `</div>`
        return cellString
        } else
         // add a white cell
         return `<div id="cell-${rowNum}-${cellNum}" class="cell crimson"></div>`
}
function renderChecker (color, hidden) {
    return `<div class="checker ${color}-checker" ${hidden}></div>`
}
function parity(num) {
if (num % 2 === 0) return 'even'
else return 'odd'
}
function determineColor(rowNum, cellNum){
    if (parity(rowNum) === parity(cellNum)) return 'red'
    else return 'grey'
}
