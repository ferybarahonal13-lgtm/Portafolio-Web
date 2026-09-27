var formulario = document.getElementById('formulario-contacto');

function validarNombre() {
    var campo = document.getElementById('nombre');
    var valor = campo.value.trim();
    var errorSpan = document.getElementById('error-nombre');
    var patron = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (valor === '') {
        errorSpan.textContent = 'Ingresa tu nombre';
        campo.classList.add('invalido');
        return false;
    }

    if (!patron.test(valor)) {
        errorSpan.textContent = 'El nombre no debe contener números';
        campo.classList.add('invalido');
        return false;
    }

    errorSpan.textContent = '';
    campo.classList.remove('invalido');
    return true;
}

function validarCampo(id, mensaje) {
    var campo = document.getElementById(id);
    var valor = campo.value.trim();
    var errorSpan = document.getElementById('error-' + id);

    if (valor === '') {
        errorSpan.textContent = mensaje;
        campo.classList.add('invalido');
        return false;
    }

    errorSpan.textContent = '';
    campo.classList.remove('invalido');
    return true;
}

function validarCorreo() {
    var campo = document.getElementById('correo');
    var valor = campo.value.trim();
    var errorSpan = document.getElementById('error-correo');
    var patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (valor === '') {
        errorSpan.textContent = 'Ingresa tu correo';
        campo.classList.add('invalido');
        return false;
    }

    if (!patron.test(valor)) {
        errorSpan.textContent = 'Ingresa un correo válido, ej: nombre@dominio.com';
        campo.classList.add('invalido');
        return false;
    }

    errorSpan.textContent = '';
    campo.classList.remove('invalido');
    return true;
}

function validarMensaje() {
    var campo = document.getElementById('mensaje');
    var valor = campo.value.trim();
    var errorSpan = document.getElementById('error-mensaje');

    if (valor === '') {
        errorSpan.textContent = 'Escribe un mensaje';
        campo.classList.add('invalido');
        return false;
    }

    if (valor.length < 10) {
        errorSpan.textContent = 'Tu mensaje debe tener al menos 10 caracteres';
        campo.classList.add('invalido');
        return false;
    }

    errorSpan.textContent = '';
    campo.classList.remove('invalido');
    return true;
}

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    var nombreValido = validarNombre();
    var correoValido = validarCorreo();
    var asuntoValido = validarCampo('asunto', 'Ingresa un asunto');
    var mensajeValido = validarMensaje();

    if (nombreValido && correoValido && asuntoValido && mensajeValido) {
        alert('Tu mensaje se envió correctamente');
        formulario.reset();
    }
});

var linksMenu = document.querySelectorAll('nav ul li a');

for (var i = 0; i < linksMenu.length; i++) {
    linksMenu[i].addEventListener('click', function() {
        document.getElementById('menu').checked = false;
    });
}