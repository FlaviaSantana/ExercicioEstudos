 let nome = window.prompt ('Qual seu nome?')
 let oi = document.getElementById('oi')
 let res = document.getElementById('res')
 oi.innerHTML = `Oi ${nome} !`

 
 function hora() {
    
    let hora = new Date()
    let hr = hora.getHours()
    let min = hora.getMinutes()
    res.innerHTML = `Agora são ${hr} horas e ${min} minutos <br>`
    
    if(hr <= 12) {
        res.innerHTML += `Bom Dia !!!`
        res.style.backgroundColor = '#8EAF82'
        res.style.borderRadius = '20px'
    } else if(hr > 12 && hr <= 18) {
        res.innerHTML += `Boa Tarde !!!`
        res.style.backgroundColor = '#8EAF82'
        res.style.borderRadius = '20px'
    } else {
        res.innerHTML += `Boa Noite !!!`
        res.style.backgroundColor = '#8EAF82'
        res.style.borderRadius = '20px'
    }

 }

 