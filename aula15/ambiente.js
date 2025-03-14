let num = [5,8,2,9,6]
num.push(4)
num.sort()

/*
for (var c=0;c<num.length;c++) {
    console.log(num[c])
}
*/
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(`Nosso vetor é o ${num}`)