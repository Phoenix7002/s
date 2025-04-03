import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { updateProfile } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { initMenu } from "./menu.js";

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
const mainAuthWindow = document.getElementById('main-auth-window');
const loginWindow = document.getElementById('login-window');
const registerWindow = document.getElementById('register-window');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const loginForm = document.getElementById('login');
const registerForm = document.getElementById('register');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const registerEmail = document.getElementById('register-email');
const registerPassword = document.getElementById('register-password');
const registerConfirmPassword = document.getElementById('register-confirm-password');
const loginError = document.getElementById('login-error');
const registerError = document.getElementById('register-error');
const userInfo = document.getElementById('user-info');
const backButtons = document.querySelectorAll('.auth-back-btn');

function showMainAuthWindow() {
    mainAuthWindow.style.display = 'block';
    loginWindow.style.display = 'none';
    registerWindow.style.display = 'none';
}

function showLoginWindow() {
    mainAuthWindow.style.display = 'none';
    loginWindow.style.display = 'block';
    registerWindow.style.display = 'none';
    loginError.textContent = '';
    loginForm.reset();
}

function showRegisterWindow() {
    mainAuthWindow.style.display = 'none';
    loginWindow.style.display = 'none';
    registerWindow.style.display = 'block';
    registerError.textContent = '';
    registerForm.reset();
}

loginBtn.addEventListener('click', showLoginWindow);
registerBtn.addEventListener('click', showRegisterWindow);

backButtons.forEach(btn => {
    btn.addEventListener('click', showMainAuthWindow);
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
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    const nickname = prompt('Введите ваш никнейм:') || email.split('@')[0];
    
    if (password !== confirmPassword) {
        document.getElementById('register-error').textContent = 'Пароли не совпадают';
        return;
    }
    
    if (password.length < 6) {
        registerError.textContent = 'Пароль должен содержать минимум 6 символов';
        return;
    }
    
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
    } else {
        authModal.classList.add('active');
        gameContainer.classList.add('blurred');
        userInfo.textContent = '';
        showMainAuthWindow();
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
