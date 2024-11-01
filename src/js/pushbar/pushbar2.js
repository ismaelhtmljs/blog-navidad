document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('open-pushbar').addEventListener('click', function(){
        document.getElementById('navbar-pushbar').classList.add('active');
    });
    document.getElementById('close-pushbar').addEventListener('click', function(){
        document.getElementById('navbar-pushbar').classList.remove('active');
    });
});