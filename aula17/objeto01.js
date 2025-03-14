let amigo = {nome: 'Letícia', 
    idade: 19,
    sexo: 'F',
    verificar(p){
        if (p >= 18) {
            console.log(`${this.nome} é maior de idade!`)
        } else {
            console.log(`${this.nome} é menor de idade!`)
        }
    }
}

console.log(`${amigo.nome} tem ${amigo.idade} anos!`)
amigo.verificar(amigo.idade)