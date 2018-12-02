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

// Cell listener
$('#chessboard tr td').click(function () {
  var cellpos = $(this).attr('id')
  console.log('cell:' + cellpos + ' clicked') 
})


// note: rows start at 0
// A8 is row 7
function getRowFromCoord(coord){
    return parseInt(coord.substring(1,2)) - 1;
}

// C4
function getColFromCoord(coord){
    return coord.charCodeAt(0) - 64;
}

console.log(getRowFromCoord("A8")); //7
console.log(getColFromCoord("C4")); //3 
