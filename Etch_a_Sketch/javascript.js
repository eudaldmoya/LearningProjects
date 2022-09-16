let start = true;
let c = 255;
let j = 1
function createGrid() {
    totalSquares = rows * columns;
    console.log(totalSquares);
    if(!start) {
        cont = document.querySelector(".container");
        cont.remove();
    }
    const space = document.createElement("div");
    space.classList.add('container');
    outcontainer = document.querySelector(".outcontainer");
    outcontainer.appendChild(space);
    space.style.gridTemplateColumns = `repeat(${rows}, 40px [col-start])`;
    
    for (i=0; i<totalSquares; i++) {
        cdiv = document.createElement("div");
        cdiv.setAttribute('id', '0');
        space.appendChild(cdiv);
    }
    start = false;
    changeColor();
}

function changeColor() {
    divSpace = document.querySelectorAll(".container div");
    divSpaceArr = Array.from(divSpace);
    console.log(divSpaceArr.length);
    divSpaceArr.forEach(div => {
        div.addEventListener('mouseover', () => {
            nextId = parseInt(div.id) + 1;
            div.setAttribute('id', `${nextId}`);
            console.log(nextId); 
            //actualColor = `rgb(${c-5}, ${c-5}, ${c-5})`;
            div.style.backgroundColor = `rgb(${255 - nextId * 10}, ${255 - nextId * 10}, ${255 - nextId * 10})`;
            //c=c-5;
            //div.style.backgroundColor -= 5;
        });
    });
}

const enterButton = document.querySelector("button");
enterButton.addEventListener("click", () =>  {
rows = prompt("New amount of rows: ");
columns = prompt("New amount of columns: ");
if(rows>0 && rows<=100 && columns>0 && columns<=100) createGrid();
else alert("The number of rows and columns must be between 1 and 100");
});


