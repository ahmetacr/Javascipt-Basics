// Welcome to the Etch a Sketch Project!
// Create a webpage with a 16*16 grid of square divs:
const container = document.querySelector('.container');
const gridContainer = document.createElement('div');
const DEFAULT_SIZE = 32;
const DEFAULT_MODE = 'color';
const DEFAULT_COLOR = 'red';

gridContainer.classList.add('gridContainer');
container.appendChild(gridContainer);

let current_mode = DEFAULT_MODE;
let current_color = DEFAULT_COLOR;
let current_size = DEFAULT_SIZE;
/*-----------------------ERASE MODE--------------------------------------------------*/
const eraseBTN = document.getElementById('erase');
eraseBTN.addEventListener('click',eraseMode);
function eraseFunction() {
    this.classList.remove('colorMode');
    this.classList.remove('multicolor');
    this.classList.toggle('eraseMode');
    this.style.outline = '0.5px solid grey'
    this.style.backgroundColor = `${current_color}`;
}
function eraseMode(e) {
    current_mode = eraseFunction;
    current_color = 'white';
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.removeEventListener('mouseover',multicolorFunction));
    boxes.forEach(box => box.removeEventListener('mouseover',colorFunction));
    boxes.forEach(box => box.addEventListener('mouseover',eraseFunction));
}
/*-----------------------Clear The Page----------------------------------------------*/
const clearBTN = document.getElementById('clear');
clearBTN.addEventListener('click',() => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.style.backgroundColor = 'white')});
/*---------------------Color Mode------------------------------------------------------*/
colorBtn = document.getElementById('selectClr');
colorBtn.addEventListener('input', colorMode);
function colorFunction() {
    console.log(this.style.backgroundColor);
    // this.classList.remove('box');
    this.classList.remove('eraseMode');
    this.classList.remove('multicolor');
    this.classList.toggle('colorMode');
    this.style.outline = '0.5px solid grey'
    console.log("Current:" + current_color);
    this.style.backgroundColor = `${current_color}`;
}
function colorMode(e) {
    current_mode = colorFunction;
    current_color = e.target.value;
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.removeEventListener('mouseover',eraseFunction));
    boxes.forEach(box => box.removeEventListener('mouseover',multicolorFunction));
    boxes.forEach(box => box.addEventListener('mouseover',colorFunction));
}
/*----------------------Multicolor MODE----------------------------------------------*/
// Create the random color:
function ColorRand() {
    let randomColor = `#` + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}
function multicolorFunction() {
    this.classList.remove('eraseMode');
    this.classList.remove('colorMode');
    this.classList.toggle('multicolor');
    this.style.outline = '0.5px solid grey'
    this.style.backgroundColor = `${ColorRand()}`;
}
function multicolorMode() {
    current_mode = multicolorFunction;
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.removeEventListener('mouseover',eraseFunction));
    boxes.forEach(box => box.removeEventListener('mouseover',colorFunction));
    boxes.forEach(box => box.addEventListener('mouseover',multicolorFunction));
}
const multicolorBTN = document.getElementById('multicolorMode');
multicolorBTN.addEventListener('click',multicolorMode);
/*---------------RESIZING-----------------------------------------------------*/
const select = document.createElement('select');
container.appendChild(select);
select.classList.add('selectSize');
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
    current_size = select.value.split('x')[0];
    if(select.value == 'Size') {
        console.log("Size selected!");
    } else { 
        sizeOpt = select.value;
        // console.log(sizeOpt);
        sizeOpt = sizeOpt.split('x')[0];
        let size = sizeOpt;
        gridContainer.innerHTML = '';
        createBox(size);
    }
})



/*---------------------------CREATING THE BOXES-------------------------------------------*/

function createBox(size = DEFAULT_SIZE,mode) { 
    times = (512**2)/(size**2); // they just did size*size
    for(i = 0;i < times;i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundColor = 'white';
        box.style.height = `${size}px`;
        box.style.width = `${size}px`;
        gridContainer.appendChild(box);
    }
}
createBox();










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