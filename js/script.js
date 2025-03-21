document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navPanel = document.getElementById('navPanel');
    const settingsButton = document.getElementById('settingsButton');
    const settingsWindow = document.getElementById('settingsWindow');
    const themeSwitch = document.getElementById('themeSwitch');

    navToggle.addEventListener('click', () => {
        navPanel.classList.toggle('open');
        navToggle.classList.toggle('moved');
    });

    settingsButton.addEventListener('click', () => {
        settingsWindow.style.display = 'block';
    });

    window.closeSettingsWindow = () => {
        settingsWindow.style.display = 'none';
    };

    function applyTheme(theme) {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }

    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    if (savedTheme === 'dark') {
        themeSwitch.classList.add('active');
    } else {
        themeSwitch.classList.remove('active');
    }

    themeSwitch.addEventListener('click', () => {
        themeSwitch.classList.toggle('active');
        const theme = themeSwitch.classList.contains('active') ? 'dark' : 'light';
        applyTheme(theme);
    });
});

const encodedPass = "REVCVUcqT05ANzAwMipQQVNT";
