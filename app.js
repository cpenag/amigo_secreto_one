
let amigos = [];

// Función añadir un amigo a la lista de amigos
function agregarAmigo() {
    let input = document.getElementById("nombreAmigo");
    let nombre = input.value.trim(); 

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre); 
    input.value = ""; 
    actualizarLista(); 
}

//Lista actualizada de amigos
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe agrega al menos un nombre antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `Tu Amigo Secreto es: <strong>${amigoSorteado}</strong> `;
}

// Reiniciar el juego
function reiniciarJuego() {
    amigos = []; // Vaciar lista
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiar la lista en la página
    document.getElementById("resultado").innerHTML = ""; // Borrar el resultado del sorteo
}
