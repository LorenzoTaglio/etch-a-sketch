const gridContainer = document.querySelector(".grid-container");
const root = document.querySelector(":root");
const tilesNum = document.querySelector(".change-tiles-num");

const colorPicker = document.querySelector("input");

const rainbowmodeButton = document.querySelector(".rainbow");
let rainbowModeActive = false;

const clear = document.querySelector(".clear");

clear.addEventListener("click", ()=>{clearGrid()});


colorPicker.addEventListener("change", e=>{
    root.style.setProperty("--bgCol", e.target.value);
})

rainbowmodeButton.addEventListener("click", ()=>{
    rainbowmodeButton.classList.toggle("active");
    if(rainbowModeActive) {
        rainbowModeActive = false;
        rainbowmodeButton.textContent = "Rainobow Mode: OFF";
    }
    else{
        rainbowModeActive = true;
        rainbowmodeButton.textContent = "Rainobow Mode: ON";
    } 
})

function clearGrid(){
    gridContainer.childNodes.forEach(tile =>{
        tile.style.setProperty("background-color", "#ffffff");
    })
}

function randomColor(){
    console.log("cacca");
    return "#" + Math.floor(Math.random()*0xffffff+1).toString(16);
}

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
    if(rainbowModeActive)
        event.target.style.setProperty("background-color", randomColor());
    else{
        let styleVar = getComputedStyle(root);
        event.target.style.setProperty("background-color", styleVar.getPropertyValue("--bgCol"));
    }
    // event.target.classList.add("filled");
}

function changeTilesNum(){
    let tNum;
    do{
        tNum = prompt("How many tiles do you want? (max: 100)");
        console.log(tNum);
    }while((tNum < 1 || tNum > 100) && tNum !== null ? (alert("Invalid tiles number"),1) : 0);
    root.style.setProperty("--tilesNum", `${tNum}`);
    createGrid();
    
}
function activateTiles(){
    gridContainer.childNodes.forEach(tile =>{
        tile.addEventListener("mouseenter", e=>colorTile(e));
    })    
}
createGrid();
console.log(randomColor());
tilesNum.addEventListener("click",()=>{changeTilesNum()});