document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const SHARE_BTN = document.querySelector('.share-icon');
    const COPY_MSG = document.querySelector('.copy-message');
    const SHARE_LINKS = document.querySelector('.share');
    const COPY_BTN = document.getElementById('copyButton');

    // Constants
    const TEXT_TO_COPY = "This project is from hafizurrahaman0";
    const COPY_NOTIFICATION_DURATION = 1000;
    const DESKTOP_BREAKPOINT = 768;

    // Share button toggle
    SHARE_BTN.addEventListener('click', () => {
        SHARE_LINKS.classList.toggle('display-links');
    });

    // Desktop hover effects
    if (window.innerWidth > DESKTOP_BREAKPOINT) {
        const setShareLinksVisibility = (opacity, zIndex) => {
            SHARE_LINKS.style.opacity = opacity;
            SHARE_LINKS.style.zIndex = zIndex;
        };

        SHARE_BTN.addEventListener('mouseover', () => setShareLinksVisibility(1, 1));
        SHARE_BTN.addEventListener('mouseout', () => setShareLinksVisibility(0, 0));
    }

    // Copy to clipboard
    COPY_BTN.addEventListener('click', async () => {
        const content = `${TEXT_TO_COPY} ${window.location.href}`;

        try {
            await navigator.clipboard.writeText(content);
            console.log('Text copied to clipboard!');
            
            COPY_MSG.style.top = '10px';
            setTimeout(() => {
                COPY_MSG.style.top = '-100px';
            }, COPY_NOTIFICATION_DURATION);
        } catch (err) {
            console.error('Failed to copy text:', err);
        }
    });
});