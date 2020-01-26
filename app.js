const hex = [
    '00', '33', '66', '99', 'cc', 'ff'
]

const arrOfColors = [];
const hex = ["00", "33", "66", "99", "cc", "ff"];
for (let i = 0; i < hex.length; i++) {
  for (let j = 0; j < hex.length; j++) {
    for (let k = 0; k < hex.length; k++) {
      arrOfColors.push(`${hex[i]}${hex[j]}${hex[k]}`);
    }
  }
}


// const div = document.querySelector('div');
// div.addEventListener('click', (ev) => {
//     ev.target.style.backgroundColor = '#ffffff';
//     ev.target.style.borderWidth = '1px';
// });

function renderGrid() {
    // <table> element
    const table = document.createElement("tbody");
    // build a table row <tr>
    for (let h = 0; h < height; h++) {
    const tr = document.createElement("tr");
    // build a table column <td>
    for (let w = 0; w < width; w++) {
        const td = document.createElement("td");
        // We'll put the coordinates on the cell
        // Element itself (using dataset),
        // letting us fetch it in a click listener later.
        td.dataset.row = h;
        td.dataset.col = w;
        tds.push(td);
        tr.append(td);
    }
    table.append(tr);
    }
    document.getElementById("gridBoard").append(table);
}

function renderColorGrid() {
    // <table> element
    const table = document.createElementById("colorBoard");
    // build a table row <tr>
    // for (let color = 0; color < arrOfColors.length; color++) {
    //     // document.append(table);
        
        
    // }   
    arrOfColors.map((color) => {
        // document.getElementById()
        table.append(`<div class='colorSquare' style=''></div>`)
    });
}

//TODO:
// button => renderGrid