function contaPalavras(valor) {
    let texto = "O Naruto pode ser um pouco duro às vezes, talvez você não saiba disso, mas o Naruto também cresceu sem pai. ... Mesmo assim eu nunca vi ele chorar, ficar zangado ou se dar por vencido, ele está sempre disposto a melhorar, ele quer ser respeitado, é o sonho dele e o Naruto daria a vida por isso sem hesitar."
    const conta = texto.split(" ").length
    return conta
}
console.log(contaPalavras())





/*
8)
Contar a quantidade de palavras em um texto (use: if, function e console)
function contarpalavra(valor){ valor.replace(/(\r\n|\n|\r)/g," ").trim(); var cont = valor.split(/\s+/g).length - 1; if(cont == "1" || cont == "0")
*/