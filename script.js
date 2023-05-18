const gridContainer = document.querySelector(".grid-container");
const root = document.querySelector(":root");


function createGrid() {
    let styleVar = getComputedStyle(root);
    for(let i=0;i<styleVar.getPropertyValue("--tilesNum")**2;i++){
        let tile = document.createElement("div");
        tile.classList.add("tile");
        gridContainer.appendChild(tile);
    }
}

function colorTile(event) {
    event.target.classList.add("filled");
}

createGrid();

gridContainer.childNodes.forEach(tile =>{
    tile.addEventListener("mouseenter", e=>colorTile(e));
})