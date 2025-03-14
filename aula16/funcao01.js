/*
var soma = function(n1=0,n2=0) {
    return n1+n2
}

console.log(soma(5,5))
*/

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1) 
    }
}

console.log(fatorial(5))