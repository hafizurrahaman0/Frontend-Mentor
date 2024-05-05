const BACKGROUND_IMAGE = document.getElementById('bg-pattern');

function isDesktopMode() {
    return window.matchMedia("(min-width: 768px)").matches;
}

// Function to change the image source
function changeImageSource() {
    if (isDesktopMode()) {
        // Change source to de  sktop version
        BACKGROUND_IMAGE.src = '../images/bg-pattern-top-desktop.svg';
    } else {
        // Change source to mobile version
        BACKGROUND_IMAGE.src = '../images/bg-pattern-top-mobile.svg';
    }
}

// Call the function initially
changeImageSource();

// Listen for resize events to update image source if viewport changes
window.addEventListener('resize', changeImageSource);