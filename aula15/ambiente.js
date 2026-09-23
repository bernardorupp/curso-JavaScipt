let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro elemento é  ${num[0]}`)
pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor nao foi encontrado!')
} else {
    console.log(`O valor 8 esta na posicao ${pos}`)
}
