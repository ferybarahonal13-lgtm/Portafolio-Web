const formulario = document.getElementById('formulario-contacto');

function validarNombre() {
    const campo = document.getElementById('nombre');
    const valor = campo.value.trim();
    const errorSpan = document.getElementById('error-nombre');
    const patron = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

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
    const campo = document.getElementById(id);
    const valor = campo.value.trim();
    const errorSpan = document.getElementById('error-' + id);

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
    const campo = document.getElementById('correo');
    const valor = campo.value.trim();
    const errorSpan = document.getElementById('error-correo');
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    const campo = document.getElementById('mensaje');
    const valor = campo.value.trim();
    const errorSpan = document.getElementById('error-mensaje');

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

    const nombreValido = validarNombre();
    const correoValido = validarCorreo();
    const asuntoValido = validarCampo('asunto', 'Ingresa un asunto');
    const mensajeValido = validarMensaje();

    if (nombreValido && correoValido && asuntoValido && mensajeValido) {
        alert('Tu mensaje se envió correctamente');
        formulario.reset();
    }
});

const linksMenu = document.querySelectorAll('nav ul li a');

for (let i = 0; i < linksMenu.length; i++) {
    linksMenu[i].addEventListener('click', function() {
        document.getElementById('menu').checked = false;
    });
}