const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const sliderItems = document.querySelector('.slider-items');

let scrollAmount = 0;
const scrollStep = 220; // Each step is 220px (depends on the width of each photo)

nextBtn.addEventListener('click', () => {
    scrollAmount += scrollStep;
    sliderItems.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) scrollAmount = 0;
    sliderItems.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
    });
});
