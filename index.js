const container = document.querySelector('.container');
const gridSize = document.querySelector('.grid-size');
const color = document.querySelector('#pixel-color');
const reset = document.querySelector('.reset');
let choice = 16;
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

        pixel.addEventListener('mouseover', (e) => {
            if(e.target.tagName ==='DIV' && !e.target.classList.contains('clicked')){
                e.target.style.backgroundColor = color.value;
                e.target.classList.add('active');
            }
        } );

        pixel.addEventListener('mouseout', (e) => {
            if(e.target.tagName === 'DIV' && !e.target.classList.contains('clicked')){
                e.target.style.backgroundColor = 'initial';
                e.target.classList.remove('active');
            }
        })

        pixel.addEventListener('click',(e) =>{
            if(e.target.tagName === 'DIV'){
                e.target.classList.toggle('clicked');
                if (e.target.classList.contains('clicked')) {
                    e.target.style.backgroundColor = color.value;
                    e.target.classList.add('active');
                } else {
                    e.target.style.backgroundColor = 'initial';
                    e.target.classList.remove('active');
                }
            }
        });
 
        container.appendChild(pixel);
}
}

gridSize.addEventListener('click', () => {
    let valor;
    let gridChoice;
    do {
        gridChoice = prompt('Grid size: ');
        valor = parseInt(gridChoice);

        if(isNaN(valor)){
            alert('Please, enter a number');
        }else if(valor < 1 || valor > 100){
            alert('Only number between 1 and 100');
        }

    }while (isNaN(valor) || valor < 1 || valor > 100);
    choice = gridChoice;
    clearGrid();
    drawGrid(gridChoice);
})

reset.addEventListener('click', () => {
    clearGrid();
    drawGrid(choice);
})

drawGrid()
