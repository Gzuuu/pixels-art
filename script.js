document.querySelectorAll('.color')[0].style.backgroundColor = 'black'
document.querySelectorAll('.color')[1].style.backgroundColor = 'lightgreen'
document.querySelectorAll('.color')[2].style.backgroundColor = 'lightblue'
document.querySelectorAll('.color')[3].style.backgroundColor = 'lightYellow'

function alteraCores (){
let cores = 'xxx,xxx,xxx';
for(index = 0; index < cores.length; index += 1){
   if (index == 0 || index == 3 || index == 6){
    cores = cores.replace('x', parseFloat((Math.ceil(Math.random() * 2))))
   }else {
    cores = cores.replace('x', parseFloat((Math.ceil(Math.random() * 5))))
   }
} return cores
}
let botao = document.querySelector('#button-random-color')

botao.addEventListener('click', function(){
    let todos = document.querySelectorAll('.color')
    todos[1].style.backgroundColor = `rgb(${alteraCores()})`
    todos[2].style.backgroundColor = `rgb(${alteraCores()})`
    todos[3].style.backgroundColor = `rgb(${alteraCores()})`
})