function somArray() {
    const num = [
        9, 9.4, 7.6, 5.5, 0.6, 7, 1.5, 4.5, 4, 3
    ]
    const soma = num.reduce(
        (valor1, valor2) => valor1 + valor2
    )
    return `soma dos números de um arrray:  ${soma}`
}
console.log(somArray())



/*
12)
Calcular a soma dos números de um array
*/