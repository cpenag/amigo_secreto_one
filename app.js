
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

