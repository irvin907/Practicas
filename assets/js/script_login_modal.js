document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginModalOpenBtn').addEventListener('click', function() {
        document.getElementById('loginModal').style.display = 'block';
    });

    document.querySelector('.login-modal-close').addEventListener('click', function() {
        document.getElementById('loginModal').style.display = 'none';
    });

    document.getElementById('loginModalForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // Aquí puedes agregar la lógica para manejar el envío del formulario (por ejemplo, validación y envío de datos).
        // Por ahora, simplemente ocultamos el modal.
        document.getElementById('loginModal').style.display = 'none';
    });
});
