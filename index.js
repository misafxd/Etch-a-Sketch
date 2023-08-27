const container = document.querySelector('.container');
const CONTAINER_SIZE = 30;
let gridChoice = 16;

let pixelWidth = (CONTAINER_SIZE/gridChoice) + "rem";

for(let i = 0; i < (gridChoice * gridChoice); i++){
        const pixel = document.createElement('div');
        pixel.style.width = pixelWidth;
        pixel.style.height = pixelWidth;
        pixel.classList.add('pixel');
        container.appendChild(pixel);
}