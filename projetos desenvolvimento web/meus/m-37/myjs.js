let palavra = document.getElementById('palavra')
let res = document.getElementById('res')

function contando() {
  
    let c = palavra.value.length
    res.innerHTML = `O texto contem ${c} letras`
    
}