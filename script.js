const gridContainer = document.querySelector(".grid-container");

function createGrid() {
    for(let i=0;i<16*16;i++){
        let tile = document.createElement("div");
        tile.classList.add("tile");
        gridContainer.appendChild(tile);
    }
}

createGrid();