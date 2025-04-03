import { 
  auth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from './firebase.js';

class AuthController {
  constructor() {
    this.authWindow = document.querySelector('.auth-window');
    this.gameMenu = document.querySelector('.game-menu');
    this.tabButtons = document.querySelectorAll('.tab-btn');
    this.forms = {
      login: document.getElementById('login-form'),
      register: document.getElementById('register-form')
    };
    this.statusEl = document.querySelector('.auth-status');
    this.playButton = document.querySelector('.play-button');
    
    this.initTabs();
    this.initForms();
    this.checkAuthState();
  }
  
  initTabs() {
    this.tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        Object.values(this.forms).forEach(form => form.classList.add('hidden'));
        this.forms[btn.dataset.tab].classList.remove('hidden');
        this.statusEl.textContent = '';
      });
    });
  }
  
  initForms() {
    this.forms.login.addEventListener('submit', async (e) => {
      e.preventDefault();
      await this.handleLogin();
    });
    
    this.forms.register.addEventListener('submit', async (e) => {
      e.preventDefault();
      await this.handleRegister();
    });

    if(this.playButton) {
      this.playButton.addEventListener('click', () => {
        this.handlePlayButton();
      });
    }
  }
  
  async handleLogin() {
    const email = this.forms.login.querySelector('input[type="email"]').value;
    const password = this.forms.login.querySelector('input[type="password"]').value;
    
    try {
      this.statusEl.textContent = 'Вход...';
      await signInWithEmailAndPassword(auth, email, password);
      this.showSuccess('Вход выполнен!');
      this.closeAuthWindow();
    } catch (error) {
      this.showError(this.getAuthErrorMessage(error.code));
    }
  }
  
  async handleRegister() {
    const email = this.forms.register.querySelector('input[type="email"]').value;
    const password = this.forms.register.querySelector('input[type="password"]').value;
    const confirmPassword = this.forms.register.querySelector('input[type="password"]:last-of-type').value;
    
    if(password !== confirmPassword) {
      this.showError('Пароли не совпадают');
      return;
    }
    
    try {
      this.statusEl.textContent = 'Регистрация...';
      await createUserWithEmailAndPassword(auth, email, password);
      this.showSuccess('Регистрация успешна! Войдите в аккаунт.');
      this.tabButtons[0].click();
    } catch (error) {
      this.showError(this.getAuthErrorMessage(error.code));
    }
  }

  async handlePlayButton() {
    if(auth.currentUser) {
      console.log("Пользователь авторизован, начинаем игру");
    } else {
      this.showAuthWindow();
    }
  }
  
  checkAuthState() {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        console.log("Пользователь авторизован:", user.email);
        this.closeAuthWindow();
      } else {
        console.log("Пользователь не авторизован");
        this.showAuthWindow();
      }
    });
  }
  
  getAuthErrorMessage(code) {
    const messages = {
      'auth/invalid-email': 'Некорректный email',
      'auth/user-disabled': 'Аккаунт отключен',
      'auth/user-not-found': 'Пользователь не найден',
      'auth/wrong-password': 'Неверный пароль',
      'auth/email-already-in-use': 'Email уже используется',
      'auth/weak-password': 'Пароль должен быть не менее 6 символов',
      'auth/operation-not-allowed': 'Операция не разрешена'
    };
    return messages[code] || 'Ошибка авторизации';
  }
  
  showSuccess(message) {
    this.statusEl.textContent = message;
    this.statusEl.style.color = '#4caf50';
  }
  
  showError(message) {
    this.statusEl.textContent = message;
    this.statusEl.style.color = '#f44336';
  }
  
  showAuthWindow() {
    this.authWindow.classList.remove('hidden');
    this.gameMenu.classList.add('hidden');
    this.tabButtons[0].click(); // Переключаем на вкладку входа
  }
  
  closeAuthWindow() {
    this.authWindow.classList.add('hidden');
    this.gameMenu.classList.remove('hidden');
  }

  async logout() {
    try {
      await signOut(auth);
      console.log("Пользователь вышел из системы");
    } catch (error) {
      console.error("Ошибка выхода:", error);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const authController = new AuthController();
  
  window.authController = authController;
});