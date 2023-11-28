function carregar() {
    var msg = window.document.getElementById('msg')
    var msg2 =window.document.getElementById('msg2')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   //var hora = 20
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    

    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        msg2.innerHTML = 'Bom Dia!!!'
        document.body.style.background = '#c1954b'

    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/tarde.png'
        msg2.innerHTML = 'Boa Tarde!!!'
        document.body.style.background = '#b8b36a'
    } else {
        img.src = 'imagens/noite.png'
        msg2.innerHTML = 'Boa Noite!!!'
        document.body.style.background = '#327ab3'
    }
}