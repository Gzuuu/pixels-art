window.onload = function () {
    let todos = document.querySelectorAll('.color')
    let teste = JSON.parse(localStorage.getItem('colorPalette'))
    if (teste != null){
    todos[1].style.backgroundColor = teste [0]
    todos[2].style.backgroundColor = teste [1]
    todos[3].style.backgroundColor = teste [2]
    }

function trocaNaPagina() {
    let todos = document.querySelectorAll('.color')

    let primeiro = todos[1].style.backgroundColor = `rgb(${alteraCores()})`
    let segundo = todos[2].style.backgroundColor = `rgb(${alteraCores()})`
    let terceiro = todos[3].style.backgroundColor = `rgb(${alteraCores()})`  
    let test = [];
    test.push(primeiro, segundo, terceiro)
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

}  
