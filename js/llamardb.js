let usuarios = [];
fetch('usuarios.json')
    .then(response => response.json())
    .then(data => {
        usuarios = data;
    })
    .catch(error => console.error('Error al cargar los datos:', error));

document.querySelector('.login-button').addEventListener('click', function (event) {
    event.preventDefault();

    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;

    const modalMessage = document.getElementById('modal-message');
    const modal = document.getElementById('modal');

    if (!correo || !contraseña) {
        modalMessage.textContent = 'Por favor, rellena todos los campos.';
        modal.style.display = "block";
        return;
    }

    const usuario = usuarios.find(u => u.correo === correo && u.contraseña === contraseña);

    if (usuario) {
        sessionStorage.setItem('usuario', JSON.stringify({ nombre: usuario.nombre, correo: usuario.correo }));
        modalMessage.textContent = `Bienvenido, ${usuario.nombre}!`;
        setTimeout(() => {
            window.location.href = 'capiIndex.html';
        }, 1625);
    } else {
        modalMessage.textContent = 'Credenciales incorrectas. Intenta de nuevo.';
    }

    modal.style.display = "block";
});