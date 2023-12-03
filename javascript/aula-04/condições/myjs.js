function verificar() {
    let vel = document.getElementById('vel')
    let res = document.getElementById('res')
    res.innerHTML = `<p>Sua velocidade atual é de <strong> ${vel.value} Km/h</strong></p>`
    
    if(vel.value > 100) {
        res.innerHTML += `<p>Você está <strong>MULTADO </strong>por excesso de velocidade</p>`
    }
    res.innerHTML +=`<p>Dirija sempre com cinto de segurança</p>`
    vel.value = ''
}