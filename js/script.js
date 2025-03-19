document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.main-nav-toggle');
    const navPanel = document.querySelector('.main-nav-panel');

    navToggle.addEventListener('click', () => {
        navPanel.classList.toggle('open');
        navToggle.classList.toggle('moved');
    });
});
