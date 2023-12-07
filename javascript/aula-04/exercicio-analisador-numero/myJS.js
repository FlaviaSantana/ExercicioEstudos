let numero = document.getElementById('num')
let valores = []
let lista = document.getElementById('list')


function adicionar() {

    let num = Number(numero.value)
    
    if(num < 1 || num > 100) {
        alert('Digite um numero valido')
    } else {
        valores.push(num)
       let item = document.createElement('option')
       item.text = `numero ${num} adicionado `
       lista.appendChild(item)
       
    }
}