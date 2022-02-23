function numPrimo(num) {
    let divisores = 0
    for (let i = 1; i <= num; i++)
        if (num % i == 0)
            divisores++;

    if (divisores == 2)
        return true;
    else
        return false;
}
console.log(numPrimo(17))








/*11) explicacação:
Criar uma função que retorne um valor true or false informando se o número enviado como 
parâmetro é um número primo.
Um número primo é um número que só pode ser dividido por 1 e por ele mesmo.
Por exemplo: 3,5,7,11,13,17









let divisores = 0
    for (let i = 1; i <= num; i++) {
        divisores++
        if (num % i === 0) {
            return false
        }

        else { return num > 1 }

    }
    if (divisores === 2) {
        return true

        //return num > 1;



    }



}*/


/*

for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
        return num > 1;
    }
*/

/* const divisao = numero / numero
const verificaPrimo = numero / divisao
//console.log(verificaPrimo)
if (verificaPrimo % ) {
    return true
}
else () {

    return false
}



    var numeroPrimoInicial = 1

    while (numeroPrimoInicial <= num) {

        if (numeroPrimoInicial / numeroPrimoInicial) {
            numeroPrimoInicial = numeroPrimoInicial + 1
            return true
        }
        else { return false }
    }





*/


/*

function primo(){
  
  var divisores=0;

  for(var count=1 ; count<=numero ; count++)
   if(numero % count == 0)
          divisores++;
  
  if(divisores==2)
        return true;
  else
        return false;
}



for (let i = 2; i < num; i++)     
if (num % i === 0) {       return false;     }   return num > 1;


   if (calculo === 1 && primo === numero) {
        return true
    }
    return false

*/