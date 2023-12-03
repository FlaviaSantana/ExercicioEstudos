function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   if(fano.value.length == 0 || fano.value > ano) {
    alert('[ERRO] Verifique os dados e teente novamente!')
   } else {
    var fsex = document.getElementsByName('radisex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute ('id', 'foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'imagens/crianca-h.png')
        } else if (idade < 21) {
            img.setAttribute('src', 'imagens/jovem-h.png')
        } else if (idade < 50) {
            img.setAttribute('src', 'imagens/adulto-h.png')
        } else {
            img.setAttribute('src', 'imagens/idoso-h.png')
        }
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'imagens/crianca-m.png')
        } else if (idade < 21) {
            img.setAttribute('src', 'imagens/jovem-m.png')
        } else if (idade < 50) {
            img.setAttribute('src', 'imagens/adulto-m.png')
        } else {
            img.setAttribute('src', 'imagens/idoso-m.png') 
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
   }
}