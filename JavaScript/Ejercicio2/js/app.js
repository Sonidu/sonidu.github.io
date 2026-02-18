
/*
 *Script para crear una combinación para la bonoloto 
 */

//Declaración de variables:
let veces = 6
let arrBoleto = []
let num = 49

//Declaración de funciones:

//Función para generar un número aleatorio entre 1 y 49
function aleatorio(num){
    return Math.floor(Math.random() * num) + 1
}

//Función para insertar un número único (no repetido) dentro de un Array
function insertarUnico(arrBoleto, numAleatorio){
    if(arrBoleto.indexOf(numAleatorio) ===-1){
        arrBoleto.push(numAleatorio)
    }
}

while (arrBoleto.length < veces){
    let numAleatorio = aleatorio(num)
    insertarUnico(arrBoleto, numAleatorio)
}

console.log(arrBoleto)
document.getElementById("resultado").textContent = arrBoleto