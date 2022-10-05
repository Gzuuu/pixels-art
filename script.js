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

}