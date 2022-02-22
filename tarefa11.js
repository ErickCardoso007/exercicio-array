function numPrimo(numero) {
    /* const calculo = numero / numero
     const primo = numero / 1*/

    let contador = 0
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) contador++;
        return true
    }
    return false
}
console.log(numPrimo(4))


/*11) explicacação:
Criar uma função que retorne um valor true or false informando se o número enviado como 
parâmetro é um número primo.
numeros primos : 3,5,7,11,13,17

for (let i = 2; i < num; i++)     
if (num % i === 0) {       return false;     }   return num > 1;


   if (calculo === 1 && primo === numero) {
        return true
    }
    return false

*/