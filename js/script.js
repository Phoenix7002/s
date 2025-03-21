document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navPanel = document.getElementById('navPanel');

    navToggle.addEventListener('click', () => {
        navPanel.classList.toggle('open');
        navToggle.classList.toggle('moved');
    });
});

const encodedPass = "REVCVUcqT05ANzAwMipQQVNT";
