let start = true;

function createGrid() {
    totalSquares = rows * columns;
    console.log(totalSquares);
    if(!start) {
        cont = document.querySelector(".container");
        cont.remove();
        console.log("not start");
    }
    const space = document.createElement("div");
    space.classList.add('container');
    outcontainer = document.querySelector(".outcontainer");
    outcontainer.appendChild(space);
    space.style.gridTemplateColumns = `repeat(${rows}, 40px [col-start])`;
    
    for (i=0; i<totalSquares; i++) {
        cdiv = document.createElement("div");
        space.appendChild(cdiv);
    }
    start = false;
}

const enterButton = document.querySelector("button");
enterButton.addEventListener("click", () =>  {
rows = prompt("New amount of rows: ");
columns = prompt("New amount of columns: ");
if(rows>0 && rows<=100 && columns>0 && columns<=100) createGrid();
else alert("The number of rows and columns must be between 1 and 100");
});
