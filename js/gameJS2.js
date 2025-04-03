import { getAuth, signOut, deleteUser } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { app } from "./firebase-auth.js";

export function initMenu(user) {
    const mainMenu = document.getElementById('main-menu');
    const nicknameElement = document.getElementById('player-nickname');
    const settingsBtn = document.getElementById('settings-btn');
    const settingsMenu = document.getElementById('settings-menu');
    const logoutBtn = document.getElementById('logout-btn');
    const deleteAccountBtn = document.getElementById('delete-account-btn');
    const singleplayerBtn = document.getElementById('singleplayer-btn');
    
    mainMenu.style.display = 'flex';
    
    nicknameElement.textContent = user.displayName || user.email.split('@')[0];
    
    settingsBtn.addEventListener('click', () => {
        settingsMenu.style.display = settingsMenu.style.display === 'none' ? 'flex' : 'none';
    });
    
    logoutBtn.addEventListener('click', async () => {
        const auth = getAuth();
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Ошибка при выходе:', error);
        }
    });
    
    deleteAccountBtn.addEventListener('click', async () => {
        if (confirm('Вы уверены что хотите удалить аккаунт? Это действие нельзя отменить!')) {
            const auth = getAuth();
            const user = auth.currentUser;
            
            try {
                await deleteUser(user);
                alert('Аккаунт успешно удалён');
            } catch (error) {
                console.error('Ошибка при удалении аккаунта:', error);
                alert('Не удалось удалить аккаунт');
            }
        }
    });
    
    singleplayerBtn.addEventListener('click', () => {
        mainMenu.style.display = 'none';
        console.log('Запуск одиночной игры');
    });
}
