document.querySelector('.register-button').addEventListener('click', function (event) {
    event.preventDefault();

    const registroNombre = document.getElementById('nombre').value;
    const registroCorreo = document.getElementById('correo-reg').value;
    const registroContraseña = document.getElementById('contraseña-reg').value;

    const modalMessage = document.getElementById('modal-message');
    const modal = document.getElementById('modal');

    if (!registroCorreo || !registroContraseña) {
        modalMessage.textContent = 'Por favor, rellena todos los campos.';
        modal.style.display = "block";
        return;
    }

    if (!registroCorreo.endsWith('@gmail.com')) {
        modalMessage.textContent = 'Por favor, utiliza un correo de Gmail.';
        modal.style.display = "block";
        return;
    }

    if (registroContraseña.length >= 15) {
        modalMessage.textContent = 'La contraseña debe tener menos de 15 caracteres.';
        modal.style.display = "block";
        return;
    }

    const nuevoUsuario = {
        nombre: registroNombre,
        correo: registroCorreo,
        contraseña: registroContraseña
    };

    usuarios.push(nuevoUsuario);

    modalMessage.textContent = 'Registro exitoso! Ahora puedes iniciar sesión.';
    modal.style.display = "block";

    document.getElementById('nombre').value = '';
    document.getElementById('correo-reg').value = '';
    document.getElementById('contraseña-reg').value = '';
});