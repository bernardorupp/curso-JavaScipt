var amostras = []


function adicionar(){
    var cod = document.getElementById('txtcode')
    var loc = document.getElementById('txtloc')
    var tipo = document.getElementById('txttype')
    var massa = document.getElementById('txtm')
    var teor = document.getElementById('txtteor')
    var res = document.querySelector('div#res')

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
            Código: cod.value,
            Local: loc.value,
            Tipo: tipo.value,
            Massa: m,
            Teor: t

        }
        amostras.push(amostra)

        cod.value = ''
        loc.value = ''
        tipo.value = ''
        massa.value = ''
        teor.value = ''

        var lista = ``

        for (var i = 0; i < amostras.length; i++) {
            var a = amostras[i]
            console.log(a.codigo)        

            lista +=  `<p>O código da amostra é ${a.codigo}</p>
                      <p>A amostra foi encontrada no(a) ${a.Local}</p>
                      <p>O tipo da amostra é ${a.Tipo}</p>
                      <p>Tem massa de ${a.Massa} g</p>
                      <p>O seu teor é ${a.Teor} %</p>`
        }

            res.innerHTML = lista
        }

    }

function codigoExiste(codigo) {
    for (var i = 0; i < amostras.length; i++) {
        var a = amostras[i]

        if (a.codigo == codigo) {
            return true
        }
    }

    return false
}