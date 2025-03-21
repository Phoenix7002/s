document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navPanel = document.getElementById('navPanel');

    navToggle.addEventListener('click', () => {
        navPanel.classList.toggle('open');
        navToggle.classList.toggle('moved');
    });
});

// Открытие окна настроек
document.getElementById('settings-button').addEventListener('click', () => {
    document.getElementById('settings-window').style.display = 'block';
});

// Закрытие окна настроек
function closeSettingsWindow() {
    document.getElementById('settings-window').style.display = 'none';
}

// Закрытие окна при клике вне его
window.addEventListener('click', (event) => {
    const settingsWindow = document.getElementById('settings-window');
    const settingsButton = document.getElementById('settings-button');
    if (event.target !== settingsButton && !settingsButton.contains(event.target)) {
        if (event.target !== settingsWindow && !settingsWindow.contains(event.target)) {
            settingsWindow.style.display = 'none';
        }
    }
});

const encodedPass = "REVCVUcqT05ANzAwMipQQVNT";
