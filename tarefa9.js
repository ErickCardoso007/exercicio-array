function retornArray(array) {
    array = [9, 7, -4, -334, -90, 6, 5, 7, 15, 45, 4, 3]

    const positivos = array.filter(function (a) { return a > -1; });

    return positivos;


}
console.log(retornArray())

/*
const ordemCrescente = arrayNum.sort(function (a, b) {
    return a - b;
});


/*9) 
Criar uma função que receba como parâmetro um array de números e retorne um array 
contendo somente números positivos.

var arr = [7,4,2,12,10,9,17,20];

function soma(num1,num2) {
    resul = num1 + num2;
    return resul;
}
document.write(soma(arr[]))
*/