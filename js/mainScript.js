document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navPanel = document.getElementById('navPanel');

    navToggle.addEventListener('click', () => {
        navPanel.classList.toggle('open');
        navToggle.classList.toggle('moved');
    });
});

document.getElementById('settings-button').addEventListener('click', () => {
    document.getElementById('settings-window').style.display = 'block';
});

function closeSettingsWindow() {
    document.getElementById('settings-window').style.display = 'none';
}

window.addEventListener('click', (event) => {
    const settingsWindow = document.getElementById('settings-window');
    const settingsButton = document.getElementById('settings-button');
    if (event.target !== settingsButton && !settingsButton.contains(event.target)) {
        if (event.target !== settingsWindow && !settingsWindow.contains(event.target)) {
            settingsWindow.style.display = 'none';
        }
    }
});

function updateIconsForTheme(theme) {
    const icons = document.querySelectorAll('.nav-panel ul li a img, .settings-button img, .content li a img');
    icons.forEach(icon => {
        const src = icon.getAttribute('src');
        if (theme === 'light') {
            icon.setAttribute('src', src.replace('.png', '_light.png'));
        } else {
            icon.setAttribute('src', src.replace('_light.png', '.png'));
        }
    });
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateIconsForTheme(theme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    const themeSelect = document.getElementById('theme-select');
    if (themeSelect) {
        themeSelect.value = savedTheme;
    }
});

document.getElementById('theme-select')?.addEventListener('change', (event) => {
    const selectedTheme = event.target.value;
    applyTheme(selectedTheme);
});

const encodedPass = "REVCVUcqT05ANzAwMipQQVNT";
