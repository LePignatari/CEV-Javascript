function GerarTabuada() {
    var numInput = document.getElementById('num')
    var res = document.getElementById('seltab')
    
    if (numInput.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var num = Number(numInput.value)
        res.innerHTML = ''

        for(c=1;c<=10;c++) {
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            res.appendChild(item)
        }
    }
}