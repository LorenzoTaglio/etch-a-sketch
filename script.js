const gridContainer = document.querySelector(".grid-container");
const root = document.querySelector(":root");
const tilesNum = document.querySelector(".change-tiles-num");

function removeTiles() {
    while(gridContainer.firstChild){
        gridContainer.firstChild.remove();
    }
}

// when changing the number of tiles, remove the previous ones and activate the new ones.
function createGrid() {
    removeTiles();
    let styleVar = getComputedStyle(root);
    for(let i=0;i<styleVar.getPropertyValue("--tilesNum")**2;i++){
        let tile = document.createElement("div");
        tile.classList.add("tile");
        gridContainer.appendChild(tile);
    }
    activateTiles();
}

function colorTile(event) {
    event.target.classList.add("filled");
}

function changeTilesNum(){
    let tNum;
    do{
        tNum = prompt("How many tiles do you want? (max: 100)");
        console.log(tNum);
    }while((tNum < 1 || tNum > 100) && tNum !== null? (alert("Invalid tiles number"),1) : 0);
    root.style.setProperty("--tilesNum", `${tNum}`);
    createGrid();
    
}
function activateTiles(){
    gridContainer.childNodes.forEach(tile =>{
        tile.addEventListener("mouseenter", e=>colorTile(e));
    })    
}
createGrid();

tilesNum.addEventListener("click",()=>{changeTilesNum()});