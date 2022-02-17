//NÃO ROLA PRA BAIXO!!!!!
//NÃO ROLA PRA BAIXO!!!!!
//NÃO ROLA PRA BAIXO!!!!!
//NÃO ROLA PRA BAIXO!!!!!
//NÃO ROLA PRA BAIXO!!!!!
//NÃO ROLA PRA BAIXO!!!!!
//NÃO ROLA PRA BAIXO!!!!!
//NÃO ROLA PRA BAIXO!!!!!



























































































const nota = [
    9, 9.4, 7.6, 5.5, 0.6, 7, 1.5, 4.5, 4, 3
]
function mediaNota(nota) {
    let i = 0, soma = 0, divisao = nota.length;
    while (i < divisao) {
        soma = soma + nota[i++];
    }
    return soma / divisao;
}

const media = mediaNota(nota);

if (media >= 6) {
    console.log("\t\t\tParabéns!!!\n" + "\nSua média de todos as provas foi de " + media.toFixed(1) + "\nVocê está aprovado!")

}
else if (media < 6) {
    console.log("\t\t\tReprovado!\n" + "\nSua média de todos as provas foi de " + media.toFixed(1) + "\nEsperamos que se esforce mais da próxima!")

} else {
    console.log("\nTente novamente mais tarde!")
}
