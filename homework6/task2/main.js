const bodyElement = document.body;
const Input = document.getElementById('color-input');
const Button = document.getElementById('Btn');
const text = document.getElementById('colorOptions');

const possibleColors = ['red', 'blue', 'green', 'black', 'white'];

const searchInArray = (element, array)=>{
    return array.indexOf(element);
}
const changeColor = ()=>{
    const color = Input.value.toLowerCase().trim();
    const colorIndex = searchInArray(color, possibleColors);
    if(colorIndex !== -1){
        bodyElement.style.backgroundColor = color;
        text.style.display = 'none';
    }
    else{
        alert("invalid color");
    }
    Input.value = '';
}

Button.addEventListener('click', changeColor);
Input.addEventListener('keydown', (event)=>{
    if (event.key ==='Enter') {
        changeColor();
    }
})