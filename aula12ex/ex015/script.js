function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano|| Number(fano.value) < 1910) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //Crianca
                img.setAttribute('src', 'pexels-bebemenino.png')
            } else if (idade < 24) {
                //Jovem
                img.setAttribute('src', 'pexels-guri.png')
            } else if (idade < 65) {
                //Adulto
                img.setAttribute('src', 'pexels-homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'pexels-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //Crianca
                img.setAttribute('src', 'pexels-bebemenina.png')
            } else if (idade < 24) {
                //Jovem
                img.setAttribute('src', 'pexels-guria.png')
            } else if (idade < 65) {
                //Adulta
                img.setAttribute('src', 'pexels-mulher.png')
            } else {
                //Idosa
                img.setAttribute('src', 'pexels-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }
}