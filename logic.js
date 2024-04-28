function redirectToOption(option) {
    switch(option) {
        case 1:
            window.location.href = "/options/opcion1.html";
            break;
        case 2:
            window.location.href = "/options/opcion2.html";
            break;
        case 3:
            window.location.href = "/options/opcion3.html";
            break;
        case 4:
            window.location.href = "/options/opcion4.html";
            break;
        case 5:
            window.location.href = "/options/opcion5.html";
        break;
        default:
            console.error('Opción no válida');
            break;
    }
}

function selectRandomOption() {
    var randomNumber = Math.floor(Math.random() * 4) + 1; // Genera un número aleatorio entre 1 y 4
    redirectToOption(randomNumber);
}

