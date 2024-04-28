function redirectToNewPage() {
    window.location.href = "/options/Selecciones/opcion1S.html";
}
function redirectToNewPage2() {
    window.location.href = "/options/Selecciones/opcion2S.html";
}
function redirectToNewPage3() {
    window.location.href = "/options/Selecciones/opcion3S.html";
}
function redirectToNewPage4() {
    window.location.href = "/options/Selecciones/opcion4S.html";
}
function redirectToNewPage5() {
    window.location.href = "/options/Selecciones/opcion5S.html";
}

function moveButton() {
    var button = document.getElementById('move-button'); // Seleccionar el botón por su ID
    var container = document.querySelector('.container');
    
    var randomX = Math.floor(Math.random() * (container.clientWidth - button.clientWidth));
    var randomY = Math.floor(Math.random() * (container.clientHeight - button.clientHeight));
    
    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}
function compartirTexto() {
    var texto = "Te lo hare saber enseguida";
    
    // Intenta abrir una ventana para compartir texto
    if (navigator.share) {
        navigator.share({
            title: 'Acabo de escojer arduamente ',
            text: texto,
        })
        .then(() => console.log('Texto compartido exitosamente.'))
        .catch((error) => console.error('Error al compartir:', error));
    } else {
        // Si el navegador no admite la API de compartir, muestra un mensaje de alerta
        alert("Tu navegador no soporta la función de compartir.");
    }
}
function resizeButtons() {
    var increaseButton = document.getElementById('increase-button');
    var increasedButton = document.getElementById('increased-button');

    // Incrementa exponencialmente el tamaño del boton siguiente
    var currentSize = parseFloat(window.getComputedStyle(increasedButton).fontSize);
    var newSize = currentSize * 1.5; // Aumentar el tamaño en un 50%
    increasedButton.style.fontSize = newSize + 'px';

    // Disminuye exponencialmente el tamaño del boton actual
    currentSize = parseFloat(window.getComputedStyle(increaseButton).fontSize);
    newSize = currentSize * 0.5; // Disminuir el tamaño a la mitad
    increaseButton.style.fontSize = newSize + 'px';
}

function ocultarBoton() {
    var button2 = document.getElementById('Button2');
    button2.style.display = 'none'; // Oculta el botón 2
    var button1 = document.getElementById('Button1');
    button1.style.transition = 'transform 1s'; // Establece una transición de 1 segundo para la rotación
    button1.style.transform = 'rotate(360deg)';
}