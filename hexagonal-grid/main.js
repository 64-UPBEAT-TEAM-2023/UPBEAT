const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const a = 2 * Math.PI / 6;
const r = 50;

function init() {
  // drawGrid(canvas.width, canvas.height);
    drawGrid(11,5);
  // drawHexagon(r, r);
}
init();

function drawHexagon(x, y, row, col) {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
  }
  ctx.closePath();
  ctx.stroke();

  // Add text inside the hexagon to show the row and column indices
  ctx.font = "12px sans-serif";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(`(${row+1}, ${col+1})`, x, y);
}

//Fail 2
// function drawGrid(cols, rows) {
//   let row=0;
//   let col=0;
//   for (let y = r, j = 0; row < rows; row++,  y += 2 ** ((j + 1) % 2) * r * Math.sin(a), j = 0) 
//   {

//     for (let x = r; col < cols; col++,x += r * (1 + Math.cos(a)), y += (-1) ** j++ * r * Math.sin(a))
//     {
//       drawHexagon(x, y);
//     }
//   }
// }

function drawGrid(cols, rows) {
  let row = 0;
  let col = 0;
  for (let y = r, j = 0; row < rows; row++) {
    y += 2 ** ((j + 1) % 2) * r * Math.sin(a);
    j = 0;
    for (let x = r; col < cols; col++) {
      x += r * (1 + Math.cos(a));
      y += (-1) ** j++ * r * Math.sin(a);
      drawHexagon(x, y, row, col);
    }
    col = 0;
  }
}


// ORIGINAL
// function drawGrid(width, height) {
//   for (let y = r, j = 0; y + r * Math.sin(a) < height; y += 2 ** ((j + 1) % 2) * r * Math.sin(a), j = 0) 
//   {
//     for (let x = r; x + r * (1 + Math.cos(a)) < width; x += r * (1 + Math.cos(a)), y += (-1) ** j++ * r * Math.sin(a)) 
//     {
//       drawHexagon(x, y);
//     }
//   }
// }

//Fail 1
// function drawGrid(rows, cols) {
//   for (let row = 0; row < rows; row++) {
//     for (let col = 0; col < cols; col++) {
//       const x = (col + 0.5) * r * (1 + Math.cos(a));
//       const y = (2 * row + (col % 2)) * r * Math.sin(a);
//       drawHexagon(x, y);
//     }
//   }
// }
