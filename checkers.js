var selectedChecker = undefined

var checkers = [
    {row: 1, cell: 2, color: 'red'},
    {row: 1, cell: 4, color: 'red'},
    {row: 1, cell: 6, color: 'red'},
    {row: 1, cell: 8, color: 'red'},
    {row: 2, cell: 1, color: 'red'},
    {row: 2, cell: 3, color: 'red'},
    {row: 2, cell: 5, color: 'red'},
    {row: 2, cell: 7, color: 'red'},
    {row: 3, cell: 2, color: 'red'},
    {row: 3, cell: 4, color: 'red'},
    {row: 3, cell: 6, color: 'red'},
    {row: 3, cell: 8, color: 'red'},
    {row: 6, cell: 1, color: 'grey'},
    {row: 6, cell: 3, color: 'grey'},
    {row: 6, cell: 5, color: 'grey'},
    {row: 6, cell: 7, color: 'grey'},
    {row: 7, cell: 2, color: 'grey'},
    {row: 7, cell: 4, color: 'grey'},
    {row: 7, cell: 6, color: 'grey'},
    {row: 7, cell: 8, color: 'grey'},
    {row: 8, cell: 1, color: 'grey'},
    {row: 8, cell: 3, color: 'grey'},
    {row: 8, cell: 5, color: 'grey'},
    {row: 8, cell: 7, color: 'grey'},
]




function renderCell(rowNum, cellNum) {
        if (cellColor(rowNum, cellNum) === `grey`) {
        return `<div id="cell-${rowNum}-${cellNum}" class="cell black"></div>`
    } else 
      return `<div id="cell-${rowNum}-${cellNum}" class="cell white"></div>`
} 

function renderCheckers(){
    console.log('rendering checkers')
    clearBoard()
    $(`.black.cell`).click(moveSelectedcheckerHere)
    for(let i=0; i<checkers.length; i++) {
       let checker = checkers[i]; 
       console.log(" rendering checker: ", checkers[i])
       if (checker.row && checker.cell) {
        $(`#cell-${checker.row}-${checker.cell}`).html(renderChecker(i, checker.color))
        $(`#cell-${checker.row}-${checker.cell}`).unbind('click')
       } else {
           console.log(`put `, checker, ` into out of play`)
           $(`#out-of-play-${checker.color}`).html(renderChecker(i, checker.color))
       }
       
    }
    $(`.checker`).click(selectChecker)
}

function renderChecker ( i, color) {
return `<div id="checker-${i}" class="checker ${color}-checker" bacon="${i}"></div>`
}
 
/***Helper Methods***/

function selectChecker() {
    let checker = $(this)
    if(checker.hasClass(`selected`)) {
        console.log(`this checker was already selected`)
        remove()
        return
    }

    $(`.selected`).removeClass(`selected`)

     let checkerIndex = checker.attr('bacon')
     console.log(`checkerIndex == `, checkerIndex)

     selectedChecker = checkers[checkerIndex]
     console.log(`finished selecting checker:`, selectedChecker )

     checker.addClass(`selected`)
}

function remove() {
    console.log(`removing this... `, selectedChecker)
    selectedChecker.row = undefined
    selectedChecker.cell = undefined
    selectedChecker = undefined
    renderCheckers() 
}













