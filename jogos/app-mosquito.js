
var altura = 0
var largura = 0
var posicaox = 0
var posicaoy = 0
var vidas = 1

function ajustaTamanhoPalcoJogo() {
   altura = window.innerHeight
   largura = window.innerWidth 

  //console.log(altura, largura)
}

  ajustaTamanhoPalcoJogo()

function posicaoRandomica() {

   // remover o mosquito anterior (caso exista)

   if(document.getElementById('mosquito')) {
      document.getElementById('mosquito').remove()

      if(vidas > 5) {
       window.location.href = 'mosquito-fim.html'
      } else {
      document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'

      vidas++
      }
   }

   


   posicaox = Math.floor(Math.random() * altura) - 150
   posicaoy = Math.floor(Math.random() * largura) - 150

   posicaox = posicaox < 0 ? 0 : posicaox
   posicaoy = posicaoy < 0 ? 0 : posicaoy

//console.log(posicaox, posicaoy)

// criar o elemento html

var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosquito.png'
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
mosquito.style.left = posicaox + 'px'
mosquito.style.top = posicaoy + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function() {
  this.remove()
}

document.body.appendChild(mosquito)



}

function tamanhoAleatorio() {
   var classe = Math.floor(Math.random() * 3)
   
   switch(classe) {
      case 0:
         return 'mosquito1'

      case 1: 
         return 'mosquito2'

      case 2:
         return 'mosquito3'
   }
}

function ladoAleatorio() {
   var classe = Math.floor(Math.random() * 2)
   
   switch(classe) {
      case 0:
         return 'ladoA'

      case 1: 
         return 'ladoB'

   }
}