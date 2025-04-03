document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const gameMenu = document.querySelector('.game-menu');
    const loaderImages = document.querySelectorAll('.loader-images img');
    const loaderVideo = document.querySelector('.loader-wheel');
    
    const VIDEO_DURATION = 12500;
    const FADE_DURATION = 1000;
    
    let currentImage = 0;
    let isVideoPlaying = true;

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

    const requiredSignals = 3;
    let receivedSignals = 0;
    
    window.reportLoadingSuccess = function(signalName) {
        if(loadingScreen.classList.contains('fade-out')) return;
        
        receivedSignals++;
        console.log(`Сигнал получен: ${signalName} (${receivedSignals}/${requiredSignals})`);
        
        if(receivedSignals >= requiredSignals) {
            completeLoading();
        }
    };
    
    function completeLoading() {
        const timeLeft = VIDEO_DURATION - (loaderVideo.currentTime * 1000);
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                gameMenu.classList.add('visible');
            }, 1000);
        }, timeLeft);
    }

    setTimeout(() => window.reportLoadingSuccess('assets'), 2000);
    setTimeout(() => window.reportLoadingSuccess('audio'), 4500);
    setTimeout(() => window.reportLoadingSuccess('config'), 7000);
});
