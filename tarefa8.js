function contaPalavras() {
    let texto = " O patinho feio  Era uma manhã de verão, e uma pata havia botado cinco ovos. Ela estava aguardando impaciente a chegada de seus filhotinhos. Assim, quando o primeiro ovo se partiu, mamãe pata ficou muito contente. Logo os outros patinhos também começaram a nascer. Mas havia um ovo que demorou para se quebrar, deixando-a ansiosa. Passado algum tempo, o último filhote finalmente conseguiu sair do ovo. Mas quando mamãe pata o viu, ela não ficou muito satisfeita e exclamou: Esse patinho é muito diferente, muito feio. Não pode ser meu filho! Ah! Alguém te pregou uma peça. Disse a galinha que morava ali por perto. O tempo foi passando e o patinho feio foi ficando cada vez mais feio, cada vez mais diferente de seus irmãos e cada vez mais isolado. Os outros animais zombavam dele, o que o deixava entristecido e angustiado. Então, quando o inverno chegou, o patinho resolveu partir. Ele andou bastante e encontrou uma casa, assim, resolveu entrar pensando que lá talvez alguém gostasse dele. Foi o que aconteceu. Havia um homem que o acolheu, assim, o patinho passou esse tempo muito bem. Nossa! E como é lindo! Dessa forma, o patinho descobriu que na verdade, ele era um cisne. Desde então, ele passou a viver entre seus iguais e não ficou mais angustiado.  Esse conto foi escrito pelo dinamarquês Hans Christian Andersen em 1843 e transformou-sem em filme da Disney em 1939. A história nos fala sobre aceitação e pertencimento. O patinho, depois de ser muito humilhado e experimentar sentimentos de angústia, desamparo e baixa auto estima, consegue saber de seu valor. Isso porque ele descobre que, na verdade, estava inserido em um ambiente que não era o seu por natureza, pois ele era um cisne. Em alguma medida, a narrativa sobre emoções presentes no universo infantil. Muitas vezes, as crianças sentem-se deslocadas entre os amigos e mesmo na própria família. Tais emoções, se não tratadas, podem ser levadas para a vida adulta também."

    const conta = texto.split(" ").length
    
        if (conta >= 100){
        return `a quantidade de palavras no texto é de ${conta}`
        }
        return `O texto é muito curto com apenas ${conta} caracteres`
    
   // return conta
}
console.log(contaPalavras())





/*
8)
Contar a quantidade de palavras em um texto (use: if, function e console)
function contarpalavra(valor){ valor.replace(/(\r\n|\n|\r)/g," ").trim(); var cont = valor.split(/\s+/g).length - 1; if(cont == "1" || cont == "0")
*/