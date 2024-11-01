document.addEventListener('DOMContentLoaded', () => {
    const BTN_dark = document.getElementById('theme2-dark');
    BTN_dark.addEventListener('click', () => {
        document.body.classList.toggle('dark');

        if (document.body.classList.contains('dark')) {
            localStorage.setItem('dark','true');
        } else {
            localStorage.setItem('dark','false');
        }
    });
    if (localStorage.getItem('dark') === 'true') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});