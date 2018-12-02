var board = [[], [], [], [], [], [], [], []]

function createEmptyBoard () {
  var coords = ''
  for (var r = 0; r < 8; r++) {
    var col = ''
    for (var c = 0; c < 8; c++) {
      coords = String.fromCharCode(65 + c) + (8 - r)
      col += "<td id='" + coords + "'></td>"
    }
    $('#chessboard').append('<tr>' + col + '</tr>')
  }
  // $('#chessboard tr td').click(function () {
  //   var cellpos = $(this).attr('id')
  //   console.log('cell:' + cellpos + ' clicked')
  // })
}

function initPieces () {
  for (var r = 0; r < 8; r++) {
    var col = ''
    for (var c = 0; c < 8; c++) {
      coords = String.fromCharCode(65 + c) + (8 - r)
      PIECES.forEach(function (piece) {
        piece.startingPos.forEach(function (pos) {
          if (pos == coords) {
            board[r][c] = piece
            $('#' + coords).append(
              $(
                "<img class='chesspiece' id=" +
                  piece.id +
                  ' src=' +
                  piece.icon +
                  '>'
              )
            )
          }
        })
      })
    }
  }
}
$('#chessboard tr td').click(function () {
  var cellpos = $(this).attr('id')
  console.log('cell:' + cellpos + ' clicked')
})
