document.getElementById('copiar-email').addEventListener('click', function() {
    const email = document.getElementById('email').textContent;
    navigator.clipboard.writeText(email)
        .then(() => {
            alert('¡Email copiado al portapapeles!');
        })
        .catch(err => {
            alert('Error al copiar el email: ' + err);
        });
});