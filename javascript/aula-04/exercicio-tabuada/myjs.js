function tab() {
  let num = document.getElementById('num')
  let res = document.getElementById('tab') 
  
  if (num.value.length == 0) {
    alert('Digite um número')
  } else {
    res.innerHTML = ''
    for(let c = 1; c <= 10; c++) {
        let n = Number(num.value)
        let tab = n * c
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${tab}`
        item.value = `tab${c}`
        res.appendChild(item)
    }
        
    
  }
}

