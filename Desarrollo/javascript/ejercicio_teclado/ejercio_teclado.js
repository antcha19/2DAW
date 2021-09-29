var eventoControlado = false;
window.onload = function () {
    document.onkeypress = mostrarInformacionCaracter;
    document.onkeyup = mostrarInformacionTecla;
}

function mostrarInformacionCaracter(evObject) {
    var msg = '';
    var elCaracter = String.fromCharCode(evObject.which);
    if (evObject.which != 0 && evObject.which != 13) {
        msg = 'Tecla pulsada: ' + elCaracter;
        control.innerHTML += msg + '-----------------------------<br/>';
    } else {
        msg = 'Pulsada tecla especial';
        control.innerHTML += msg + '-----------------------------<br/>';
    }
    eventoControlado = true;
}

function mostrarInformacionTecla(evObject) {
    var msg = '';
    var teclaPulsada = evObject.keyCode;
    if (teclaPulsada == 20) {
        msg = 'Pulsado caps lock (act/des mayúsculas)';
    } else if (teclaPulsada == 16) {
        msg = 'Pulsado shift';
    } else if (eventoControlado == false) {
        msg = 'Pulsada tecla especial';
    }
    if (msg) {
        control.innerHTML += msg + '-----------------------------<br/>';
    }
    eventoControlado = false;
}