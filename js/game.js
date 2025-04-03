document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const gameMenu = document.querySelector('.game-menu');
    const loaderImages = document.querySelectorAll('.loader-images img');
    const loaderVideo = document.querySelector('.loader-wheel');
    
    const VIDEO_DURATION = 12500;
    const ICON_CHANGE_DELAY = 100;
    
    let currentImage = 0;
    let isVideoPlaying = true;

    loaderVideo.addEventListener('timeupdate', function() {
        if(this.currentTime >= this.duration - 0.5) { 
            if(isVideoPlaying) {
                changeImage();
                isVideoPlaying = false;
                setTimeout(() => isVideoPlaying = true, VIDEO_DURATION - ICON_CHANGE_DELAY);
            }
        }
    });

    if(loaderImages.length > 0) {
        loaderImages[currentImage].classList.add('active');
    }

    function changeImage() {
        loaderImages[currentImage].classList.remove('active');
        currentImage = (currentImage + 1) % loaderImages.length;
        loaderImages[currentImage].classList.add('active');
        animateIconRotation();
    }

    function animateIconRotation() {
        loaderImages[currentImage].style.transform = 'translate(-50%, -50%) rotate(0deg)';
        requestAnimationFrame(() => {
            loaderImages[currentImage].style.transform = 'translate(-50%, -50%) rotate(360deg)';
        });
    }

    const requiredSignals = 3;
    let receivedSignals = 0;
    
    const simulateLoading = () => {
        setTimeout(() => window.reportLoadingSuccess('assets'), 2000);
        setTimeout(() => window.reportLoadingSuccess('audio'), 4500);
        setTimeout(() => window.reportLoadingSuccess('config'), 7000);
    };
    
    window.reportLoadingSuccess = function(signalName) {
        receivedSignals++;
        console.log(`Сигнал получен: ${signalName} (${receivedSignals}/${requiredSignals})`);
        
        if(receivedSignals >= requiredSignals) {
            completeLoading();
        }
    };
    
    function completeLoading() {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            gameMenu.classList.add('visible');
        }, 1000);
    }
    
    simulateLoading();
});
