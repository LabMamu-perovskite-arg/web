
//Cambiar la pagina a Español
function indexESP() {
    window.location.href = 'index.html';
}


// Cambiar la pagina a Ingles
function indexENG() {
    window.location.href = 'indexENG.html';
}

// Prevenir que se pueda hacer clic derecho en la pagina
function noClicDerecho() {

    return false;
}

// No permite el arrastre de las imagenes fuera del navegador
function desactivarArrastre(event) {
    event.preventDefault();
}

