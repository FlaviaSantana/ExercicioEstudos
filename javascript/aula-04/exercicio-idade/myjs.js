let ano = document.getElementById('txtano')
let sexo = document.getElementsByName('sexo')
let dat = new Date
let data = dat.getFullYear()
let res = document.getElementById('res')

function verificar() {
    
    if (ano.value.length == 0  || ano.value > data ) {
    alert('ERRO. Digite um valor valido')

    } else {
        let genero = ''
        let idade = Number(data) - Number(ano.value)
        let img = document.createElement('img')
        if (sexo[0].checked) {
            genero = `Homem`
            if (idade >= 0 && idade < 10) {
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
                img.src = 'imagens/crianca-h.png'

            } else if (idade >= 10 && idade < 21) {
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
                img.src = 'imagens/jovem-h.png'

            } else if (idade >= 21 && idade < 50) {
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
                img.src = 'imagens/adulto-h.png'

            } else {
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
                img.src = 'imagens/idoso-h.png'
            }

        } else if (sexo[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
                img.src = 'imagens/crianca-m.png'

            } else if (idade >= 10 && idade < 21) {
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
                img.src = 'imagens/jovem-m.png'

            } else if (idade >= 21 && idade < 50) {
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
                img.src = 'imagens/adulto-m.png'

            } else {
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
                img.src = 'imagens/idoso-.png'
            }

        }
        res.appendChild(img)
    }
    
}