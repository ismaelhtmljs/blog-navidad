document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('open-aside-pushbar').addEventListener('click', function() {
        document.getElementById('aside-izquierdo').classList.toggle('active');
    });
    document.getElementById('close-aside-pushbar').addEventListener('click', function() {
        document.getElementById('aside-izquierdo').classList.remove('active');
    });
});
