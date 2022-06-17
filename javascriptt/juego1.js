// Juego donde la persona debe acertar el numero que la computadora proponga
//numeros aleatorios --> 1 al 10
let aleatorio = Math.ceil(Math.random()*10)

// se programa el manejador del evento
document.getElementById("boton").addEventListener("click",function(){
    //obtener los datos del usuario
    let num = document.getElementById("numero").value

    // comprobamos si hemos acertado

    if(aleatorio == num ){
        // console.low(...) --> funcionara en la consola
        alert("Felicitaciones, lograste acertar y tienes como premio un pechito broasther :v")
        location.reload() //--> recargar el espacio
    }
    else{
        alert("Lo siento el numero es " + aleatorio + "te recomiendo que vuelvas a jugar oprimiendo el boton ENVIAR, suerte!!!")
        location
    }
})
