const usuarioGuardado = JSON.parse(sessionStorage.getItem('usuario'));

if (usuarioGuardado) {
    // Insertar el nombre y correo en el HTML
    document.getElementById('user-name').textContent = `Nombre: ${usuarioGuardado.nombre}`;
    document.getElementById('user-email').textContent = `Correo: ${usuarioGuardado.correo}`;
} else {
    // Opcional: Manejo si no hay usuario guardado
    document.getElementById('user-info').textContent = 'No has iniciado sesión.';
}
