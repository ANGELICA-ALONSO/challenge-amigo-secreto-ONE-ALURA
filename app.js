// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Implementa una función para agregar amigos.

let amigos = [];

function agregarAmigo() {

    // capturamos el valor del campo de entrada
    const nombreInput = document.getElementById("amigo");
    const nombre = nombreInput.value.trim(); //elimina espacios en blanco

    //validamos la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    //añadimos el nombre a la lista de amigos
    amigos.push(nombre);
    actualizarListaAmigos();

    //limpiamos el campo de entrada
    nombreInput.value = "";
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";  //liampiamos la lista actual

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }

}
//esta funcion nos permite seleccionar un amigo de manera aleatoria
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para seleccionar.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el amigo seleccionado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "Amigo seleccionado: " + amigoSeleccionado;
}




