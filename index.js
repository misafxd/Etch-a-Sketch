const container = document.querySelector('.container');
const gridSize = document.querySelector('.grid-size');
const color = document.querySelector('#pixel-color');


const CONTAINER_SIZE = 30;

function clearGrid(){
    if (container.firstChild){
        while (container.firstChild){
            container.removeChild(container.firstChild);
        }
    } else {
         return;
        }
}

function drawGrid(gridChoice = 16){

    let pixelWidth = (CONTAINER_SIZE/gridChoice) + "rem";
    for(let i = 0; i < (gridChoice * gridChoice); i++){
        const pixel = document.createElement('div');
        pixel.style.width = pixelWidth;
        pixel.style.height = pixelWidth;
        pixel.classList.add('pixel');
        pixel.addEventListener('click',() =>{
            pixel.style.backgroundColor = color.value;
        })
        container.appendChild(pixel);
}
}

gridSize.addEventListener('click', () => {
    let gridChoice = prompt('Grid size: ');
    clearGrid();
    drawGrid(gridChoice);
})




drawGrid()
