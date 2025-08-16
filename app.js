// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Implementa una función para agregar amigos.

//Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
//Tareas específicas:

//Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.

//Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."


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

    amigos.forEach(amigo => {
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigo;
        listaAmigos.appendChild(nuevoAmigo);
    });

}