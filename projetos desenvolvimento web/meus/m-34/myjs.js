let res = document.getElementById('res')

let x = 0


function adicionar() {
    if (x >= 0) {
        x++
        res.innerHTML = `${x}`
    }
}

function subtrair(){
    if (x > 0) {
        x--
        res.innerHTML = `${x}`
    }
}

function resetar() {
    x = 0
    res.innerHTML = `${x}`
}
