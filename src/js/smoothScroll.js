document.addEventListener('DOMContentLoaded', () => {
    const aside = document.getElementById('aside-izquierdo');
    const enlaces = aside.querySelectorAll('a');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
