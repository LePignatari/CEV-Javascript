function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoNasc = Number(document.getElementById('AnoNasc').value)
    var msg = document.getElementById('msg')

    if (anoNasc > ano || anoNasc == 0) {
        window.alert('[ERRO] Verifique os dados e teste novamente!')
    } else {
        var sexo = document.querySelector('input[name="Sexo"]:checked').value
        var idade = ano - anoNasc

        msg.style.textAlign = 'center'
        msg.innerHTML = `Detectamos ${sexo} com ${idade} anos.`

        var imagem = document.getElementById('imagem')

        if (sexo === 'Homem') {
            if (idade <= 21) {
                imagem.src = 'homemNovo.png'
            } else if (idade <= 50) {
                imagem.src = 'homemAdulto.png'
            } else {
                imagem.src = 'homemVelho.png'
            }
        } else if (sexo === 'Mulher') {
            if (idade <= 21) {
                imagem.src = 'mulherNova.png'
            } else if (idade <= 50) {
                imagem.src = 'mulherAdulta.png'
            } else {
                imagem.src = 'mulherVelha.png'
            }
        }
    }
}
  
 