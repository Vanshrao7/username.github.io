// script.js
function revealMessage() {
    const message = "I love you more than words can express. You are my everything!";
    const specialMessage = document.getElementById('special-message');
    specialMessage.innerText = message;
    specialMessage.style.opacity = 0;
    specialMessage.style.transition = "opacity 2s";
    setTimeout(() => {
        specialMessage.style.opacity = 1;
    }, 0);
}

document.addEventListener('DOMContentLoaded', (event) => {
    const images = document.querySelectorAll('https://tse1.mm.bing.net/th/id/OIG3.eWxrvzIzlztlcEJKU3Qy?pid=ImgGn');
    images.forEach(img => {
        img.style.opacity = 0;
        img.style.transition = 'opacity 2s';
        setTimeout(() => {
            img.style.opacity = 1;
        }, 500);
    });

    const timelineItems = document.querySelectorAll('#timeline li');
    timelineItems.forEach((item, index) => {
        item.style.opacity = 0;
        item.style.transition = `opacity 1s ${index * 0.5}s`;
        setTimeout(() => {
            item.style.opacity = 1;
        }, 500);
    });

    const quotes = document.querySelectorAll('#quotes blockquote');
    quotes.forEach((quote, index) => {
        quote.style.opacity = 0;
        quote.style.transition = `opacity 1s ${index * 0.5}s`;
        setTimeout(() => {
            quote.style.opacity = 1;
        }, 500);
    });
});
