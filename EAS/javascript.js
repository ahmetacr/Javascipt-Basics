// Welcome to the Etch a Sketch Project!
// Create a webpage with a 16*16 grid of square divs:
const container = document.querySelector('.container');
const gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');

container.appendChild(gridContainer);
// Grid size 16x16 means 16x16px squares fill the document
//   which means we gotta create enough squares to fill the given space
// supposed to be 2**n
function hoverThis() {
    this.classList.toggle('hoverOn');
    let hoverOn = document.querySelectorAll('.hoverOn');
    hoverOn.forEach(hover => hover.style.cssText = `background-color:${ColorRand()}`);
}
/*---------------RESIZING-----------------------------------------------------*/

const select = document.createElement('select');
document.body.insertBefore(select,container);
function resizeGrid() {
    const SelectDefault = document.createElement('option');
    SelectDefault.textContent = "Size";
    select.appendChild(SelectDefault);
    for (i=8;i <= 128;i += i) {
        const opt = document.createElement('option');
        opt.textContent =`${i}x${i}`; 
        select.appendChild(opt);
    }    
}
resizeGrid();
select.addEventListener('change',(event) => {
    // console.log(select.value);
    if(select.value == 'Size') {
        console.log("Size selected!");
    } else { 
        sizeOpt = select.value;
        console.log(sizeOpt);
        sizeOpt = sizeOpt.split('x')[0];
        let size = sizeOpt;
        gridContainer.innerHTML = '';
        createBox(size);
    }
})
/*----------------------------------------------------------------------*/

function createBox(size) {
    times = (512**2)/(size**2);
    for(i = 0;i < times;i++) {
        const box = document.createElement('div');
        // box.className = 'box';
        box.classList.add('box');
        box.style.cssText += `height:${size}px;width:${size}px;background-color:white;outline:0.5px solid grey;`;
        box.style.cssTex
        gridContainer.appendChild(box);
        box.addEventListener('mouseover',hoverThis);
    }
}
createBox(32);

/*---------------------------------------------------------------------*/
// Create the random color:
function ColorRand() {
    let randomColor = `#` + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}
const tryA = ColorRand();
/*----------------------------------------------------------------------*/

/*----------------------------------------------------*/
/*
Notes:
html: <input id = 'sizeSlider' type = 'range' value=16(means 16 options we got) min = 1 max = 64 /> 
      <input id = 'colorPicker' type = 'color' value = '#333333' />
js: - sizeSlider.onmousemove = (e) => changeSize(e.target.value);
    - sizeSlider.onchange = (e) => changeSize(e.target.value);

    let mouseDown = false;
    document.body.onmousedown = () => (mouseDown = true) (check that!)
    document.body.onmouseup = () => (mouseDown = false) (check that!)
    
    window.onload = () = > { (check that!)
        //code
    }
    
    function changeColor(e) {
        e.target.style.backgroundColor = ${randomcolorvalue}
    }

    const DEFAULT_COLOR = 'white'
    const DEFAULT_MODE = 'color'
    const DEFAULT_SIZE = 16;

    let currentColor = DEFAULT_COLOR;
    let currentMode = DEFAULT_MODE
    let currentSize = DEFAULT_SIZE

    const colorPicker = document.getElementByID('colorPicker');
    colorPicker.oninput = (e) => setCurrentColor(e.target.value)


css:input[type='color']:: webkit-color-swatch-wrapper {
        padding = 0;
    }
    input[type'range'] {
        -webkit-apperance: none;
        background-color: green;
    }
    input[type'range']:: webkit-slider-runnable-track {
        height:10px

    }
    input[type='range']:: webkit-slider-thumb {
        -webkit-appearance:none;
        
    }


    */