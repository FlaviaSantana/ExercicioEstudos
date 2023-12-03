let inicio = document.getElementById('inicio')
let fim = document.getElementById('fim')
let passo = document.getElementById('passo')
let res = document.getElementById('res')

function contar() {
   let ini = Number(inicio.value) 
   let f = Number(fim.value)
   let p = Number(passo.value)

   if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    alert('ERRO. Faltam Dados!')
    res.innerHTML = 'Impossivel contar!'
  
    } else {
        if(p <= 0) {
            alert('Passo invalido. Será conciderado passo = 1')
            p = 1
        } else {
             res.innerHTML = `Contando: <br>`
             
             if (ini < f) {
        
                for (let c = ini; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
                }

            } else {
            
                for (let c = ini; c >= f; c -= p) {
                    res.innerHTML += `${c} \u{1F449} `
                }
            } 
         res.innerHTML += `\u{1F3F4}`
        }    
    }
 }
