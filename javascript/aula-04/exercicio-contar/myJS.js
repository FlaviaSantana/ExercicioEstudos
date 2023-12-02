
function contar() {

var inic = window.document.getElementById('inicio')
var fim = window.document.getElementById('fim')
var pas = window.document.getElementById('passo')
var res = window.document.getElementById('res') 

    if (inic.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {

        alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel Contar!'

    } else {
        res.innerHTML = 'contando: <br>'
        let i = Number(inic.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0) {
            alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        /*while(i <= f) {
            res.innerHTML += ` ${i}`
            i += p
        }*/
        /*do {
           res.innerHTML += ` ${i}`
           i += p 
        } while(i <= f)*/

        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                    res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F3F4}`
    }
}