function calcular() {
    var diam = document.getElementById('txtd')
    var prof = document.getElementById('txtp')
    var num = document.getElementById('txtn')
    var exp = document.getElementById('txtden')
    var res = document.querySelector('div#res')
    var ltamp = document.getElementById('txttamp')
    var afast = document.getElementById('txtafast')
    var esp = document.getElementById('txtesp')

    if (diam.value.length == 0 || prof.value.length == 0 || num.value.length == 0 || exp.value.length == 0 || ltamp.value.length == 0 || afast.value.length == 0 || esp.value.length == 0) {
        res.innerHTML = 'Impossível Calcular'
        window.alert('[ERRO] Faltam Dados!')
    } else {
        var d = Number(diam.value)
        var p = Number(prof.value)
        var n = Number(num.value)
        var e = Number(exp.value)
        var lt = Number(ltamp.value)
        var a = Number(afast.value)
        var s = Number(esp.value)

        if (d == 0 || p == 0 || n == 0 || e == 0 || lt == 0 || a== 0 || s == 0){
            window.alert('Adicione valores antes de calcular!')
        } else if (d < 0 || p < 0 || n < 0 || e < 0 || lt < 0 || a<0 || s<0){
            window.alert('[ERRO] Estes tipos de valores não são aceitos')
        } else if (lt > p) {
            window.alert('[ERRO] O tampão não pode ser maior que a profundidade do furo!')
        } else {
            var l = p - lt
            var met = p*n
            var vol = Math.PI* (d/2000)**2 * p
            var volcarregado = Math.PI* (d/2000)**2 * l
            var voltotal = vol*n
            var voltotcarreg = volcarregado*n
            var massaexp = volcarregado*e
            var massatotalexp = massaexp*n
            var volrocha = a*s*p
            var voltotalrocha = volrocha*n
            var rc = massatotalexp/voltotalrocha
            res.innerHTML =   `<p>A metragem total é ${met.toFixed(2)} m</p>
                              <p>O volume do furo é ${vol.toFixed(4)} m³</p>
                              <p>O volume total é ${voltotal.toFixed(4)} m³</p>
                              <p>O comprimento carregado é ${l.toFixed(2)} m</p>
                              <p>O volume carregado por furo é ${volcarregado.toFixed(4)} m³</p>
                              <p>O volume carregado total é ${voltotcarreg.toFixed(4)} m³</p>
                              <p>A massa do explosivo é ${massaexp.toFixed(2)} Kg</p>
                              <p>A massa total dos explosivos é ${massatotalexp.toFixed(2)} Kg</p>
                              <p>O volume da rocha é ${volrocha.toFixed(4)} m³</p>
                              <p>O volume total das rochas é ${voltotalrocha.toFixed(4)} m³</p>
                              <p>A razão de carregamento é ${rc.toFixed(2)} Kg/m³</p>`
        }
    }
}