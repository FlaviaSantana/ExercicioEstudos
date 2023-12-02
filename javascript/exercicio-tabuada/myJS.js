function tabuada() {

    let num = document.getElementById('numero')
    let res = document.getElementById('tab')
    

    if (num.value.length == 0) {
        alert('Digite um numero')
    } else {
        let x = Number(num.value)
        let c = 1
        res.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement ('option')
            item.text = `${x} x ${c} = ${x * c}`
            item.value = `tab${c}`
            res.appendChild(item)
            c++
        }
    }
    

    
}