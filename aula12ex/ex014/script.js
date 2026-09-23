function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()

    msg.innerHTML = `Agora são ${hora} horas, ${minuto} minutos e ${segundo} segundos.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'pexels-manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'pexels-tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE!
        img.src = 'pexels-noite.png'
        document.body.style.background = '#2a272e'
    }
}
