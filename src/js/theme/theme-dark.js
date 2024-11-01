document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-dark');
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        if (document.body.classList.contains('dark')) {
            localStorage.setItem('dark','true');
        } else {
            localStorage.setItem('dark','false');
        }
    });
    if (localStorage.getItem('dark')=== 'true') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});