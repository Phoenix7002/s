import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDoJ6gw_zuE5D-ftxQxe2vDeK6HVTWP23E",
    authDomain: "shooter-backend.firebaseapp.com",
    projectId: "shooter-backend",
    storageBucket: "shooter-backend.appspot.com",
    messagingSenderId: "664869393865",
    appId: "1:664869393865:web:8b58b6b8b5d8021f8b0418",
    measurementId: "G-K88RQ0D8S4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const authModal = document.getElementById('auth-modal');
const gameContainer = document.getElementById('game-container');
const loginForm = document.getElementById('login');
const registerForm = document.getElementById('register');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const registerEmail = document.getElementById('register-email');
const registerPassword = document.getElementById('register-password');
const loginError = document.getElementById('login-error');
const registerError = document.getElementById('register-error');
const userInfo = document.getElementById('user-info');
const authTabs = document.querySelectorAll('.auth-tab');
const authContents = document.querySelectorAll('.auth-content');

authTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabName = tab.dataset.tab;
        
        authTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        authContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === `${tabName}-form`) {
                content.classList.add('active');
            }
        });
        
        loginError.textContent = '';
        registerError.textContent = '';
    });
});

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = loginEmail.value;
    const password = loginPassword.value;
    
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        loginError.textContent = getAuthErrorMessage(error.code);
    }
});

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = registerEmail.value;
    const password = registerPassword.value;
    
    try {
        await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        registerError.textContent = getAuthErrorMessage(error.code);
    }
});

onAuthStateChanged(auth, (user) => {
    if (user) {
        authModal.classList.remove('active');
        gameContainer.classList.remove('blurred');
        userInfo.textContent = user.email;
        
        console.log('Пользователь вошел:', user.email);
    } else {
        authModal.classList.add('active');
        gameContainer.classList.add('blurred');
        userInfo.textContent = '';
        
        loginForm.reset();
        registerForm.reset();
        loginError.textContent = '';
        registerError.textContent = '';
    }
});

function getAuthErrorMessage(errorCode) {
    switch (errorCode) {
        case 'auth/invalid-email':
            return 'Неверный формат email';
        case 'auth/user-disabled':
            return 'Пользователь отключен';
        case 'auth/user-not-found':
            return 'Пользователь не найден';
        case 'auth/wrong-password':
            return 'Неверный пароль';
        case 'auth/email-already-in-use':
            return 'Email уже используется';
        case 'auth/operation-not-allowed':
            return 'Операция не разрешена';
        case 'auth/weak-password':
            return 'Пароль слишком слабый (минимум 6 символов)';
        default:
            return 'Ошибка аутентификации';
    }
}
