var num = document.getElementById('num')
var tab = document.getElementById('tabela')
var res = document.getElementById('res')
var valores = []

function numVal(n) {
    if (n >= 1 && n <= 100) {
        return true
    } else { 
        return false
    }
}

function numLista(n,lista) {
    if (lista.indexOf(n) != -1) { // se o valor for igual a -1 significa que o valor não foi encontrado na lista
        return true
    } else {
        return false
    }
}

function adicionar() {
    res.innerHTML = ''
    var n = Number(num.value)
    // function - número válido / número está na lista?
    // O número tem que ser válido É NÃO pode estar na lista 
    if (numVal(n) && !numLista(n,valores)) {
        valores.push(n)
        var valor = document.createElement('option')
        valor.text = `Valor ${n} adicionado.`
        tab.appendChild(valor)
    } else {
        alert('[ERRO] Valor inválido ou já adicionado na lista.')
    }
    num.value = ''
    num.focus()
}
function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar.')
    } else {
        var soma = 0
        // soma
        for (var c=0;c<valores.length;c++) {
            soma += valores[c]
        }

        var med = soma / valores.length
        res.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${Math.max(...valores)}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${Math.min(...valores)}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${med}.</p>`
    }
}