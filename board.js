$(document).ready(function() {
  console.log('document ready')
  $('#board-container').html(boardTemplate())
  $('.black.cell').click(toggle)
})

function toggle() {
   let checker = $(this).children().first()
   checker.toggle()
   if(!checker.is(":visible")){
       switchColor(checker);
   }
}

function switchColor (checker) {
   if (checker.hasClass('grey-checker')) {
       checker.removeClass('grey-checker')
       checker.addClass('red-checker')
   } else { 
       checker.addClass('grey-checker')
       checker.removeClass('red-checker')
   }


}