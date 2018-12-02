function init () {
  var cellnr = 0
  for (var r = 0; r < 8; r++) {
    var col = ''
    for (var c = 0; c < 8; c++) {
      col += "<td data-pos='" + cellnr + "'></td>"
      cellnr++
    }
    $('#chessboard').append('<tr>' + col + '</tr>')
  }
  $('#chessboard tr td').click(function () {
    var cellpos = $(this).attr('data-pos')
    console.log('cell' + cellpos)
  })
}
$(document).ready(init);
