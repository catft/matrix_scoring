const board = [
  '................'.split(''),
  '.0.0.0.0...0.0..'.split(''),
  '................'.split(''),
  '.0.0.0.0...0.0..'.split(''),
  '................'.split(''),
  '..0.0....0..0.0.'.split(''),
  '................'.split('')
]

const height = board.length
const width = board[0].length
const power = 3

function neighbors(board, x, y) {
  const close = []
  const cell = board[y][x]
  if( cell !== '.') return close
  for(let i = x-(power-1); i < x+(power-1); i++) {
    if (board[y] && board[y][i] === '0') {
      close.push(board[y][i])
    }
  }
  for(let i = y-(power-1); i < y+(power-1); i++) {
    if (board[i] && board[i][x] === '0') {
      close.push(board[i][y])
    }
  }
  return close
}

function score(board, x, y) {
  const cell = board[y][x]
  return {
    p: [y,x],
    t: (cell === '0') ? 'block' : 'empty',
    s: neighbors(board, x, y).length
  }
}

let scores = []
for(let y=0; y < height; y++)
  for(let x=0; x < width; x++) {
    const sc = score(board, x, y)
    console.log(sc)
    scores.push(sc)
  }
