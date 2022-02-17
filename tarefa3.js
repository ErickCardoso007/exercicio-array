const arrayNum =
    [
        -5, 10, -3, 12, -9, 5, 90, 0, 1
    ]

const ordemCrescente = arrayNum.sort(function (a, b) {
    return a - b;
});
const maiorNota = ordemCrescente.pop()

console.log(maiorNota)