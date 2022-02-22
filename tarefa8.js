function contaPalavras() {
    let texto = "O patinho feio Era uma manhã de verão, e uma pata havia botado cinco ovos. Ela estava aguardando impaciente a chegada de seus filhotinhos. Assim, quando o primeiro ovo se partiu, mamãe pata ficou muito contente. Logo os outros patinhos também começaram a nascer. Mas havia um ovo que demorou para se quebrar, deixando-a ansiosa."
    const conta = texto.split(" ").length
    if (conta >= 50){
    return `a quantidade de palavras no texto é de ${conta}`
    }
    return `O texto é muito curto com apenas ${conta} caracteres`
}
console.log(contaPalavras())





/*
8)
Contar a quantidade de palavras em um texto (use: if, function e console)
function contarpalavra(valor){ valor.replace(/(\r\n|\n|\r)/g," ").trim(); var cont = valor.split(/\s+/g).length - 1; if(cont == "1" || cont == "0")
*/