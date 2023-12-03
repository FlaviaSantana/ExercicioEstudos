let pais = document.getElementById('mora')
let nasc = document.getElementById('nasc')
let res = document.getElementById('res')

function verificar() {
    if(pais.value == nasc.value) {
        res.innerHTML = `<p> Você é <strong>Natural</strong>!!!`
    } else {
        res.innerHTML = `<p> Você é <strong>Estrangeiro</strong>!!!`
    }
    pais.value = ''
    nasc.value = ''
}