document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const gameMenu = document.querySelector('.game-menu');
    const loaderImages = document.querySelectorAll('.loader-images img');
    let currentImage = 0;

    loaderImages[currentImage].classList.add('active');

    function changeImage() {
        loaderImages[currentImage].classList.remove('active');
        currentImage = (currentImage + 1) % loaderImages.length;
        loaderImages[currentImage].classList.add('active');
        
        loaderImages[currentImage].style.transform = 'rotate(0deg)';
        setTimeout(() => {
            loaderImages[currentImage].style.transform = 'rotate(360deg)';
        }, 10);
    }

    const imageInterval = setInterval(changeImage, 12500);

    setTimeout(() => {
        clearInterval(imageInterval);
        loadingScreen.style.opacity = '0';
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            gameMenu.classList.remove('hidden');
        }, 1000);
    }, 12500);
});