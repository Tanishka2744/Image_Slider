const images = [
    {
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
        title: 'Mountain Landscape',
        desc: 'Beautiful mountain scenery'
    },
    {
        src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop',
        title: 'Forest Path',
        desc: 'Mystical forest pathway'
    },
    {
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
        title: 'Ocean View',
        desc: 'Serene ocean waves'
    },
    {
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop',
        title: 'Desert Sunset',
        desc: 'Golden hour in desert'
    },
    {
        src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop',
        title: 'City Lights',
        desc: 'Urban night photography'
    },
    {
        src: 'https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=400&h=600&fit=crop',
        title: 'Garden Flowers',
        desc: 'Colorful spring blooms'
    },
    {
        src: 'https://plus.unsplash.com/premium_photo-1673859055740-d9d92954c329?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c25vdyUyMG1vdW50YWlufGVufDB8fDB8fHww',
        title: 'Snow Mountains',
        desc: 'Winter wonderland'
    },
    {
        src: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400&h=600&fit=crop',
        title: 'Lake Reflection',
        desc: 'Perfect mirror lake'
    },
    {
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
        title: 'Autumn Forest',
        desc: 'Fall colors display'
    },
    {
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=600&fit=crop',
        title: 'Starry Night',
        desc: 'Milky way galaxy'
    },
    {
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
        title: 'Beach Paradise',
        desc: 'Tropical getaway'
    },
    {
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop',
        title: 'River Valley',
        desc: 'Peaceful river flow'
    },
    {
        src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=600&fit=crop',
        title: 'Canyon View',
        desc: 'Dramatic rock formations'
    },
    {
        src: 'https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=400&h=600&fit=crop',
        title: 'Waterfall',
        desc: 'Cascading water beauty'
    },
    {
        src: 'https://images.unsplash.com/photo-1530123985359-4fd0cce1ea8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGlnaHQlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
        title: 'Lighthouse',
        desc: 'Coastal beacon light'
    }
];

let currentIndex = 0;
const slider = document.getElementById('slider');
const indicators = document.getElementById('indicators');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function initSlider() {
    images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.innerHTML = `
                    <img src="${image.src}" alt="${image.title}" loading="lazy">
                    <div class="slide-info">
                        <div class="slide-title">${image.title}</div>
                        <div class="slide-desc">${image.desc}</div>
                    </div>
                `;
        slider.appendChild(slide);

        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        indicator.addEventListener('click', () => goToSlide(index));
        indicators.appendChild(indicator);
    });

    updateSlider();
}

function updateSlider() {
    const slides = document.querySelectorAll('.slide');
    const indicatorDots = document.querySelectorAll('.indicator');

    slides.forEach((slide, index) => {
        const offset = index - currentIndex;
        const absOffset = Math.abs(offset);

        if (absOffset === 0) {
            slide.style.transform = 'translateX(0) translateZ(0) rotateY(0deg)';
            slide.style.opacity = '1';
            slide.style.zIndex = '10';
        } else if (absOffset === 1) {
            const direction = offset > 0 ? 1 : -1;
            slide.style.transform = `translateX(${direction * 200}px) translateZ(-100px) rotateY(${direction * -30}deg)`;
            slide.style.opacity = '0.7';
            slide.style.zIndex = '5';
        } else if (absOffset === 2) {
            const direction = offset > 0 ? 1 : -1;
            slide.style.transform = `translateX(${direction * 300}px) translateZ(-200px) rotateY(${direction * -45}deg)`;
            slide.style.opacity = '0.4';
            slide.style.zIndex = '2';
        } else {
            const direction = offset > 0 ? 1 : -1;
            slide.style.transform = `translateX(${direction * 400}px) translateZ(-300px) rotateY(${direction * -60}deg)`;
            slide.style.opacity = '0';
            slide.style.zIndex = '1';
        }
    });

    indicatorDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
}

function goToSlide(index) {
    currentIndex = index;
    updateSlider();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

let autoPlayInterval = setInterval(nextSlide, 4000);

slider.addEventListener('mouseenter', () => {
    clearInterval(autoPlayInterval);
});

slider.addEventListener('mouseleave', () => {
    autoPlayInterval = setInterval(nextSlide, 4000);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

let startX = 0;
let endX = 0;

slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    }
});

initSlider();