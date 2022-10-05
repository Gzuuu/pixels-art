window.onload = function () {
    let todos = document.querySelectorAll('.color')
    let teste = JSON.parse(localStorage.getItem('colorPalette'))
    if (teste != null){
    todos[1].style.backgroundColor = teste [0]
    todos[2].style.backgroundColor = teste [1]
    todos[3].style.backgroundColor = teste [2]
    }
    document.querySelectorAll('.color')[0].classList.add('color', 'selected')

    let pixelsOnLoad = document.querySelectorAll('.pixel')
    let pixelsParse = JSON.parse(localStorage.getItem('pixelBoard'))
    for (index = 0; index < pixelsOnLoad.length; index += 1){
        if (pixelsParse != null){
            pixelsOnLoad[index].style.backgroundColor = pixelsParse[index]
        }
    }
}
document.querySelectorAll('.color')[0].style.backgroundColor = 'rgb(0,0,0)'
document.querySelectorAll('.color')[1].style.backgroundColor = 'rgb(0,255,255)'
document.querySelectorAll('.color')[2].style.backgroundColor = 'rgb(0,130,170)'
document.querySelectorAll('.color')[3].style.backgroundColor = 'rgb(120,200,0)'
function trocaNaPagina() {
    let todos = document.querySelectorAll('.color')
    let primeiro = todos[1].style.backgroundColor = `rgb(${alteraCores()})`
    let segundo = todos[2].style.backgroundColor = `rgb(${alteraCores()})`
    let terceiro = todos[3].style.backgroundColor = `rgb(${alteraCores()})`  
    let test = [primeiro, segundo, terceiro];
    localStorage.setItem('colorPalette', JSON.stringify(test))
}

function alteraCores() {
    let cores = 'xxx,xxx,xxx';
    for (index = 0; index < cores.length; index += 1) {
        if (index == 0 || index == 3 || index == 6) {
            cores = cores.replace('x', parseFloat((Math.ceil(Math.random() * 2))))
        } else {
            cores = cores.replace('x', parseFloat((Math.ceil(Math.random() * 5))))
        }
    } return cores
}
let botao = document.querySelector('#button-random-color')
botao.addEventListener('click', trocaNaPagina)

function criaTabela (numero1, numero2){

if (numero1 == undefined){numero1 = 5}
if (numero2 == undefined){numero2 = 5}

for (index = 0; index < numero1; index += 1){
    let br = document.createElement('br')
    let local = document.querySelector('#pixel-board')
    local.appendChild(br)
    br.setAttribute('class','brake')
    for(index2 = 0; index2 < numero2; index2 += 1){
    let div = document.createElement('div')
    let local = document.querySelector('#pixel-board')
    local.appendChild(div)
    div.setAttribute('class', 'pixel')
    div.style.display = 'inline-block'
    div.style.backgroundColor = 'rgb(255, 255, 255)'
    }
}
}
criaTabela()

function tradeName (){
let coresFilhas = document.querySelectorAll('.color')
let cores = document.querySelector('#color-palette')
cores.addEventListener('click', function(event){
for (let index = 0; index < coresFilhas.length; index += 1){
    coresFilhas[index].className = 'color'
}
if (event.target.className == 'color'){
    event.target.className += ' selected'
}
})
}  
tradeName()

function tradeColor (){
    let pixels = document.querySelectorAll('.pixel')
    for(let index = 0; index < pixels.length; index += 1){
    pixels[index].addEventListener('click', function(event){
        if (event.target.className == 'pixel'){
            event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor
        }
    })
}}
tradeColor()

let cleanButton = document.querySelector('#clear-board')
cleanButton.addEventListener('click', function(){
    let pixels = document.querySelectorAll('.pixel')
    for (let index = 0; index < pixels.length; index += 1){
        pixels[index].style.backgroundColor = 'rgb(255,255,255)'
    }
    localStorage.removeItem('pixelBoard')
})

function saveLS (){
let pixelForSave = document.querySelectorAll('.pixel')
let arrForSave = [];
for(let index = 0; index < pixelForSave.length; index += 1){
    let colorForSave = pixelForSave[index].style.backgroundColor
    arrForSave.push(colorForSave)
}
localStorage.setItem('pixelBoard',JSON.stringify(arrForSave))
}
let local = document.querySelector('#pixel-board');
local.addEventListener('click', saveLS)