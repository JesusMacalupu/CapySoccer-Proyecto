document.querySelector('.register-button').addEventListener('click', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo-reg').value.trim();
    const contraseña = document.getElementById('contraseña-reg').value.trim();

    const modalMessage = document.getElementById('modal-message');
    const modal = document.getElementById('modal');

    if (!nombre || !correo || !contraseña) {
        modalMessage.textContent = 'Por favor, rellena todos los campos.';
        modal.style.display = "block";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(correo)) {
        modalMessage.textContent = 'El formato del correo electrónico es incorrecto.';
        modal.style.display = "block";
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const nuevoID = usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1;

    const nuevoUsuario = {
        id: nuevoID,
        nombre: nombre,
        correo: correo,
        contraseña: contraseña
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    sessionStorage.setItem('usuario', JSON.stringify({ id: nuevoID, nombre, correo }));

    modalMessage.textContent = 'Registro exitoso. ¡Bienvenido!';
    modal.style.display = "block";
    setTimeout(() => {
        window.location.href = 'capiIndex.html';
    }, 1625);
});

document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('modal').style.display = "none";
});
