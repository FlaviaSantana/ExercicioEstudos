 /* 
        condicao simples
        if(condicao) {
            true
        }
        
        if(condicao) {
            true
        } else {
            false
        } */

var vel = 12
console.log (`A velocidade de seu carro e ${vel} km/h`)
if (vel >60) { //condicao simples
    console.log('Voce ultrapassou a velocidade permitida. Multado!')
}
console.log('Dirija sempre com cinto de seguranca!')

//condicao composta
var pais = 'EUA'
console.log(`Vivendo em ${pais}`)
if (pais == 'Brasil') {
    console.log('Voce e brasileiro')
} else {
    console.log('voce e estrangeiro')
}