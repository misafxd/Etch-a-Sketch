const container = document.querySelector('.container');
const gridSize = document.querySelector('.grid-size');
const CONTAINER_SIZE = 30;

function clearGrid(){
    if (container.firstChild){
        while (container.firstChild){
            container.removeChild(container.firstChild);
        }
    } else {
         return
        }
}

function drawGrid(gridChoice){

    let pixelWidth = (CONTAINER_SIZE/gridChoice) + "rem";
    for(let i = 0; i < (gridChoice * gridChoice); i++){
        const pixel = document.createElement('div');
        pixel.style.width = pixelWidth;
        pixel.style.height = pixelWidth;
        pixel.classList.add('pixel');
        container.appendChild(pixel);
}
}

gridSize.addEventListener('click', () => {
    let gridChoice = prompt('Grid size: ');
    clearGrid();
    drawGrid(gridChoice);
})


