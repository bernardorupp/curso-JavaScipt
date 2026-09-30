var amostras = []

var dados = localStorage.getItem('amostras')

if (dados != null) {
    amostras = JSON.parse(dados)
}

mostrarAmostras()

function adicionar(){
    var cod = document.getElementById('txtcode')
    var loc = document.getElementById('txtloc')
    var tipo = document.getElementById('txttype')
    var massa = document.getElementById('txtm')
    var teor = document.getElementById('txtteor')

    var m = Number(massa.value)
    var t = Number(teor.value)

    if (cod.value.length == 0 || loc.value.length == 0 || tipo.value.length == 0 || massa.value.length == 0 || teor.value.length == 0){
        window.alert('[ERRO] NEM TODOS OS CAMPOS FORAM PREENCHIDOS!')
    } else if (m < 0 || t < 0){
        window.alert('[ERRO] VALORES NEGATIVOS NÃO SÃO PERMITIDOS!' )
      } else if (codigoExiste(cod.value)) { 
        window.alert ('[ERRO] A amostra com este código ja foi adicionada!')
       } else {
        var amostra = {
            codigo: cod.value,
            local: loc.value,
            tipo: tipo.value,
            massa: m,
            teor: t

        }
        amostras.push(amostra)

        var dados = JSON.stringify(amostras)

        localStorage.setItem('amostras', dados)

        cod.value = ''
        loc.value = ''
        tipo.value = ''
        massa.value = ''
        teor.value = ''
        mostrarAmostras()
    }

    }
    var add = document.getElementById('txtadd')
    add.onclick = adicionar

function codigoExiste(codigo) {
    for (var i = 0; i < amostras.length; i++) {
        var a = amostras[i]

        if (a.codigo.toUpperCase() == codigo.toUpperCase()) {
            return true
        }
    }

    return false
}

function removerAmostra(codigo) {
    for (var i = 0; i < amostras.length; i++) {
        var a = amostras[i]

        if (a.codigo.toUpperCase() == codigo.toUpperCase()) {
            amostras.splice(i, 1)

            var dados = JSON.stringify(amostras)
            localStorage.setItem('amostras', dados)

            mostrarAmostras()

            return
        }
    }

    return false
}

function mostrarAmostras() {
    var res = document.querySelector('div#res')
    var lista = ``

    for (var i = 0; i < amostras.length; i++) {
        var a = amostras[i]

        var img = document.createElement('img')
        img.setAttribute('class', 'img-amostra')

        if (a.tipo == 'Esmeralda') {
        img.setAttribute('src', 'esmeralda.png')
    } else if (a.tipo == 'Ouro') {
        img.setAttribute('src', 'ouro.png')
    } else if (a.tipo == 'Prata') {
        img.setAttribute('src', 'prata.png')
    } else if (a.tipo == 'Diamante') {
        img.setAttribute('src', 'diamante.png')
    }
        lista += `<p>O código da amostra é ${a.codigo}</p>
                  <button class="btn-remover" data-codigo="${a.codigo}">Remover</button>
                  <p>A amostra foi encontrada em/no(a) ${a.local}</p>
                  <p>O tipo da amostra é ${a.tipo}</p>
                  <p>Tem massa de ${a.massa} g</p>
                  <p>O seu teor é ${a.teor} %</p>`

        lista += img.outerHTML
    }

    res.innerHTML = lista

    var botoes = document.querySelectorAll('.btn-remover')

    for(i = 0; i < botoes.length; i++) {
        botoes[i].onclick = function() {
            removerAmostra(this.dataset.codigo)
        }
    }
}

function pesquisarAmostra() {
    var pesq = document.getElementById('txtpesquisa')
    var codigo = pesq.value
    var res = document.querySelector('div#res')

    for (var i = 0; i < amostras.length; i++) {
        var a = amostras[i]

        if (a.codigo == codigo) {
            res.innerHTML = `<p>O código encontrado é ${a.codigo}</p>
                             <p>A amostra foi encontrada em/no(a) ${a.local}</p>
                             <p>A amostra encontrada é ${a.tipo}</p>
                             <p>Tem massa de ${a.massa} g</p>
                             <p>O seu teor é ${a.teor} %</p>`
        return  
        }
    }
    res.innerHTML = 'Nenhuma amostra foi encontrada!'
}
    var pesq = document.getElementById('pesq')
    pesq.onclick = pesquisarAmostra

function calcularMediaTeor() {
    if (amostras.length == 0) {
        window.alert('[ERRO] Não é possível calcular a média!')
        return false
    }

    var soma = 0

    for (var i = 0; i < amostras.length; i++) {
        var a = amostras[i]
        soma = soma + a.teor
    }

    var media = soma/amostras.length

    return media

}

var botaoMedia = document.getElementById('media')
var stats = document.getElementById('stats')

botaoMedia.onclick = function () {
    var resultado = calcularMediaTeor()

    if (resultado == false) {
        stats.innerHTML = `<p>Não é possível calcular a média</p>`
    } else {
        stats.innerHTML = `<p>A média de teores é ${resultado.toFixed(2)} %</p>`
    }
}