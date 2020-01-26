const arrOfColors = [];
const hex = ["00", "33", "66", "99", "cc", "ff"];
for (let i = 0; i < hex.length; i++) {
  for (let j = 0; j < hex.length; j++) {
    for (let k = 0; k < hex.length; k++) {
      arrOfColors.push(`${hex[i]}${hex[j]}${hex[k]}`);
    }
  }
}

const button = document.getElementById('create')
button.addEventListener('click', function renderGrid(ev) {
    ev.preventDefault()
    let rows = document.getElementById('height').value;
    let columns = document.getElementById('width').value;

    const board = [];
    for (let r=0; r<rows; r++) {
        for (let c=0; c<columns; c++) {
            board.push(`<div class='cell'></div>`);
        }
        board.push(`<br>`)
    }
    const html = board.map(cell => {
        return `${cell}`
    }).join('');
    document.getElementById('board').innerHTML = html;
})

const colorBoard = document.querySelector('#colorBoard');
colorBoard.addEventListener('click', (ev) => {
    const current = colorBoard.querySelector('.selected');
    current.classList.remove('selected');
    const target = ev.target;
    target.classList.add('selected');
})

function renderColorGrid() {
    const arrOfColors = [];
    const hex = ["00", "33", "66", "99", "cc", "ff"];
    for (let i = 0; i < hex.length; i++) {
        for (let j = 0; j < hex.length; j++) {
            for (let k = 0; k < hex.length; k++) {
                arrOfColors.push(`<div style='background-color:#${hex[i]}${hex[j]}${hex[k]}'></div>`);
            }
        }
    }   
    const html = arrOfColors.map(color => {
        return `${color}`
    }).join('')
    document.getElementById('colorBoard').innerHTML = html
    document.getElementById('colorBoard').children[0].classList.add('selected');

}
renderColorGrid();
