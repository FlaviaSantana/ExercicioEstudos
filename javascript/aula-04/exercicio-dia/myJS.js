function carregar() {
    let hora = new Date()
    let h = hora.getHours()
    let m = hora.getMinutes()
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let msg2 = document.getElementById('msg2')
    msg.innerHTML = `Agora são ${h} horas e ${m} minutos.`

    if(h <= 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#c1954b'
        msg2.innerHTML = 'Bom Dia !!!'
    } else if(h > 12 && h <= 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#b8b36a'
        msg2.innerHTML = 'Boa Tarde !!!'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#327ab3'
        msg2.innerHTML = 'Boa Noite !!!'
    }
}