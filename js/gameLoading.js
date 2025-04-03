document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const gameMenu = document.querySelector('.game-menu');
    const authWindow = document.querySelector('.auth-window');
    const loaderImages = document.querySelectorAll('.loader-images img');
    const loaderVideo = document.querySelector('.loader-wheel');
    
    const VIDEO_DURATION = 12500;
    const FADE_DURATION = 1000;
    
    let currentImage = 0;
    let isVideoPlaying = true;
    let loadingSignals = {
        firebase: false,
        auth: false,
        server: false
    };

    async function checkServerConnection() {
        try {
            const response = await fetch(`https://${firebaseConfig.authDomain}/__/favicon.ico?${Date.now()}`);
            if (response.ok) {
                console.log("Соединение с сервером установлено");
                return true;
            }
        } catch (error) {
            console.warn("Ошибка соединения с сервером:", error);
        }
        return false;
    }

    async function initFirebase() {
        try {
            await checkServerConnection();
            const app = initializeApp(firebaseConfig);
            const auth = getAuth(app);
            
            onAuthStateChanged(auth, (user) => {
                loadingSignals.auth = true;
                window.reportLoadingSuccess('auth_ready');
            });
            
            loadingSignals.firebase = true;
            window.reportLoadingSuccess('firebase_ready');
            return true;
        } catch (error) {
            console.error("Ошибка инициализации Firebase:", error);
            return false;
        }
    }

    loaderVideo.addEventListener('timeupdate', function() {
        if(this.currentTime >= this.duration - 0.5) {
            if(isVideoPlaying) {
                isVideoPlaying = false;
                fadeOutCurrentIcon();
                setTimeout(() => {
                    showNextIcon();
                    isVideoPlaying = true;
                }, FADE_DURATION);
            }
        }
    });

    if(loaderImages.length > 0) {
        loaderImages[currentImage].classList.add('active');
    }

    function fadeOutCurrentIcon() {
        const activeIcon = document.querySelector('.loader-images img.active');
        if(activeIcon) {
            activeIcon.style.transition = `all ${FADE_DURATION/1000}s ease-in-out`;
            activeIcon.style.transform = 'translate(-50%, -50%) scale(0.5)';
            activeIcon.style.opacity = '0';
        }
    }

    function showNextIcon() {
        const activeIcon = document.querySelector('.loader-images img.active');
        if(activeIcon) {
            activeIcon.classList.remove('active');
            activeIcon.style.transition = 'none';
            activeIcon.style.transform = 'translate(-50%, -50%) scale(1)';
            activeIcon.style.opacity = '0';
        }

        currentImage = (currentImage + 1) % loaderImages.length;
        const nextIcon = loaderImages[currentImage];
        
        nextIcon.classList.add('active');
        nextIcon.style.transition = `all ${FADE_DURATION/1000}s ease-in-out`;
        nextIcon.style.opacity = '1';
    }

    window.reportLoadingSuccess = function(signalName) {
        console.log(`Сигнал загрузки: ${signalName}`);
        
        switch(signalName) {
            case 'firebase_ready':
                loadingSignals.firebase = true;
                break;
            case 'auth_ready':
                loadingSignals.auth = true;
                break;
            case 'server_ready':
                loadingSignals.server = true;
                break;
        }
        
        checkAllSignals();
    };

    function checkAllSignals() {
        const allReady = Object.values(loadingSignals).every(Boolean);
        if(allReady) {
            completeLoading();
        }
    }

    function completeLoading() {
        const timeLeft = Math.max(0, VIDEO_DURATION - (loaderVideo.currentTime * 1000));
        
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                
                const auth = getAuth();
                if(auth.currentUser) {
                    gameMenu.classList.add('visible');
                } else {
                    authWindow.classList.remove('hidden');
                }
            }, 1000);
        }, timeLeft);
    }

    async function startLoading() {
        const serverConnected = await checkServerConnection();
        if(serverConnected) {
            loadingSignals.server = true;
            window.reportLoadingSuccess('server_ready');
        }
        
        await initFirebase();
        
        setTimeout(() => window.reportLoadingSuccess('assets_loaded'), 1500);
        setTimeout(() => window.reportLoadingSuccess('audio_loaded'), 3000);
    }

    startLoading();
});
