
//Función para generar un número aleatorio entre 1 y 20
function aleatorio(num){
    return  Math.floor(Math.random() * num) +1
}

let tirada = aleatorio(20)
console.log(tirada)
document.getElementById("resultado").textContent = tirada