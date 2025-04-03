document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const gameMenu = document.querySelector('.game-menu');
    const loaderImages = document.querySelectorAll('.loader-images img');
    const CYCLE_DURATION = 12500;
    const IMAGE_CHANGE_INTERVAL = 2500;
    
    const loadingState = {
        currentImage: 0,
        imageInterval: null,
        cycleTimeout: null,
        requiredSignals: 5,
        receivedSignals: 0,
        isComplete: false
    };

    function initLoading() {
        startImageRotation();
        startLoadingCycle();
        
        setupExternalSignalListeners();
    }

    function startImageRotation() {
        if (loaderImages.length > 0) {
            loaderImages[loadingState.currentImage].classList.add('active');
            
            loadingState.imageInterval = setInterval(() => {
                loaderImages[loadingState.currentImage].classList.remove('active');
                loadingState.currentImage = (loadingState.currentImage + 1) % loaderImages.length;
                loaderImages[loadingState.currentImage].classList.add('active');
                
                animateIconRotation();
            }, IMAGE_CHANGE_INTERVAL);
        }
    }

    function animateIconRotation() {
        loaderImages[loadingState.currentImage].style.transform = 'translate(-50%, -50%) rotate(0deg)';
        requestAnimationFrame(() => {
            loaderImages[loadingState.currentImage].style.transform = 'translate(-50%, -50%) rotate(360deg)';
        });
    }

    function startLoadingCycle() {
        loadingState.cycleTimeout = setTimeout(() => {
            checkLoadingCompletion();
        }, CYCLE_DURATION);
    }

    function checkLoadingCompletion() {
        if (loadingState.receivedSignals >= loadingState.requiredSignals) {
            completeLoading();
        } else {
            console.log(`Не все сигналы получены (${loadingState.receivedSignals}/${loadingState.requiredSignals}). Повторяем цикл.`);
            startLoadingCycle();
        }
    }

    function completeLoading() {
        loadingState.isComplete = true;
        clearInterval(loadingState.imageInterval);
        clearTimeout(loadingState.cycleTimeout);
        
        loadingScreen.classList.add('fade-out');
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            gameMenu.classList.add('visible');
        }, 1000);
    }

    function setupExternalSignalListeners() {
        const signals = [
            {name: 'assets', delay: 2000},
            {name: 'audio', delay: 4500},
            {name: 'config', delay: 7000},
            {name: 'network', delay: 9000},
            {name: 'physics', delay: 11000}
        ];

        signals.forEach(signal => {
            setTimeout(() => {
                receiveExternalSignal(signal.name);
            }, signal.delay);
        });
    }

    function receiveExternalSignal(signalName) {
        if (loadingState.isComplete) return;
        
        loadingState.receivedSignals++;
        console.log(`Получен сигнал: ${signalName} (${loadingState.receivedSignals}/${loadingState.requiredSignals})`);
        
        if (loadingState.receivedSignals >= loadingState.requiredSignals) {
            console.log("Все сигналы получены! Ожидаем завершения текущего цикла...");
        }
    }

    // Публичный метод для вызова из других скриптов
    window.reportLoadingSuccess = function(signalName) {
        receiveExternalSignal(signalName);
    };

    initLoading();
});
