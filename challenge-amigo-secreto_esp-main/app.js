let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const lista = document.getElementById("listaAmigos");
    
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido");
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    
    amigos.push(nombre);
    
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
    
    input.value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe haber al menos un participante para sortear.");
        return;
    }
    
    let elegido = amigos[Math.floor(Math.random() * amigos.length)];
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    mostrarResultados(elegido);
}

function mostrarResultados(elegido) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    
    const li = document.createElement("li");
    li.textContent = `El amigo secreto sorteado es: ${elegido}`;
    resultadoLista.appendChild(li);
}
