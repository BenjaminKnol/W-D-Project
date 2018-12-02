function init () {
  createEmptyBoard()
}

function createEmptyBoard () {
  var coords = ''
  for (var r = 0; r < 8; r++) {
    var col = ''
    for (var c = 0; c < 8; c++) {
      col +=
        "<td data-pos='" + String.fromCharCode(65 + c) + (8 - r) + "'></td>"
    }
    $('#chessboard').append('<tr>' + col + '</tr>')
  }
  $('#chessboard tr td').click(function () {
    var cellpos = $(this).attr('data-pos')
    console.log('cell' + cellpos)
  })
}
$(document).ready(init)
