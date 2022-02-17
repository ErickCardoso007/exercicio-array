function calculos() {
    const nota = [
        9, 9.4, 7.6, 5.5, 0.6, 7, 1.5, 4.5, 4, 3
    ]
    const divisao = nota.length
    const somaMedia = nota.reduce(
        (valor1, valor2) => valor1 + valor2
    )
    const mediaDaNota = somaMedia / divisao

    if (mediaDaNota >= 6) {
        return "aprovadoo. Parabéns por essa conquista!"
    }


    return "reprovado. Não teve sortee!"

}
console.log(calculos())