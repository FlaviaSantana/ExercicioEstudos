
var altura = 0
var largura = 0
var posicaox = 0
var posicaoy = 0

function ajustaTamanhoPalcoJogo() {
   altura = window.innerHeight
   largura = window.innerWidth 

  //console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

   posicaox = Math.floor(Math.random() * altura)
   posicaoy = Math.floor(Math.random() * largura)

console.log(posicaox, posicaoy)