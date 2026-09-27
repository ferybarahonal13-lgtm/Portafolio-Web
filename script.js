var formulario = document.getElementById('formulario-contacto');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    var nombre = document.getElementById('nombre').value.trim();
    var correo = document.getElementById('correo').value.trim();
    var asunto = document.getElementById('asunto').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();

    var valido = true;

    if (nombre === '') {
        document.getElementById('error-nombre').textContent = 'Ingresa tu nombre';
        valido = false;
    } else {
        document.getElementById('error-nombre').textContent = '';
    }

    if (correo === '' || correo.indexOf('@') === -1) {
        document.getElementById('error-correo').textContent = 'Ingresa un correo válido';
        valido = false;
    } else {
        document.getElementById('error-correo').textContent = '';
    }

    if (asunto === '') {
        document.getElementById('error-asunto').textContent = 'Ingresa un asunto';
        valido = false;
    } else {
        document.getElementById('error-asunto').textContent = '';
    }

    if (mensaje === '') {
        document.getElementById('error-mensaje').textContent = 'Escribe un mensaje';
        valido = false;
    } else {
        document.getElementById('error-mensaje').textContent = '';
    }

    if (valido) {
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
