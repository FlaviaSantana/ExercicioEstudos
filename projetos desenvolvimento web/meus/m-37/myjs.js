let palavra = document.getElementById('palavra')
let res = document.getElementById('res')

function contando() {
    let c = palavra.lenght
    res.innerHTML = `O texto contem ${c} letras`
}