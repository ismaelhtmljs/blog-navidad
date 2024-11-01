document.addEventListener('DOMContentLoaded', () => {
    const BTN = document.querySelector('.open-aside-pushbar');

    document.addEventListener('scroll', function () {
        const positionScroll = window.scrollY; // Usa scrollY para desplazamiento vertical
        const altura = 100; // Altura en la que el botón cambia de posición

        if (window.innerWidth < 768) { // Verifica si el ancho de la ventana es menor a 768px
            if (positionScroll >= altura) {
                BTN.style.position = 'fixed';
                BTN.style.left = '20px';
                BTN.style.top = '10px'; // Puedes ajustar la posición vertical si es necesario
            } else {
                BTN.style.position = ''; // Restablece la posición
                BTN.style.left = '';
                BTN.style.top = ''; // Restablece la posición vertical
            }
        } else {
            // Para pantallas más grandes, mantiene el botón fijo
            BTN.style.position = 'fixed';
            BTN.style.left = '20px';
            BTN.style.top = '10px'; // Ajusta la posición vertical si es necesario
        }
    });
});
