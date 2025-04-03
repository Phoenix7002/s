document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const gameMenu = document.querySelector('.game-menu');
    const loaderImages = document.querySelectorAll('.loader-images img');
    let currentImage = 0;
    const IMAGE_CHANGE_INTERVAL = 12500;
    const LOADING_DURATION = 12500;

    if(loaderImages.length > 0) {
        loaderImages[currentImage].classList.add('active');
    }

    function changeImage() {
        loaderImages[currentImage].classList.remove('active');
        
        currentImage = (currentImage + 1) % loaderImages.length;
        
        loaderImages[currentImage].classList.add('active');
        
        loaderImages[currentImage].style.transform = 'translate(-50%, -50%) rotate(0deg)';
        
        requestAnimationFrame(() => {
            loaderImages[currentImage].style.transform = 'translate(-50%, -50%) rotate(360deg)';
        });
    }

    const imageInterval = setInterval(changeImage, IMAGE_CHANGE_INTERVAL);

    setTimeout(() => {
        clearInterval(imageInterval);
        
        loadingScreen.classList.add('fade-out');
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            gameMenu.classList.add('visible');
        }, 1000);
        
    }, LOADING_DURATION);
});
