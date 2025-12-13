// Home Page JavaScript
let currentSlideIndex = 0;
let autoSlideInterval;

// Featured movies for home page
const featuredMovies = [
    {
        title: 'The Dark Universe',
        year: 2024,
        rating: '8.5',
        genre: 'Action, Sci-Fi',
        description: 'An epic journey through the cosmos as humanity faces its greatest threat yet.',
        poster: 'the-dark-universe.jpg'
    },
    {
        title: 'Shadow Protocol',
        year: 2024,
        rating: '8.2',
        genre: 'Thriller, Action',
        description: 'A secret agent must stop a global conspiracy before time runs out.',
        poster: 'shadow-protocol.jpg'
    },
    {
        title: 'Echoes of Tomorrow',
        year: 2024,
        rating: '8.7',
        genre: 'Drama, Sci-Fi',
        description: 'A mind-bending tale of time travel and the consequences of changing the past.',
        poster: 'echoes-of-tomorrow.jpg'
    },
    {
        title: 'Neon City',
        year: 2024,
        rating: '8.0',
        genre: 'Action, Cyberpunk',
        description: 'In a dystopian future, one hacker holds the key to freedom.',
        poster: 'neon-city.jpg'
    },
    {
        title: 'The Last Guardian',
        year: 2023,
        rating: '9.1',
        genre: 'Fantasy, Adventure',
        description: 'An ancient guardian awakens to protect the world from darkness.',
        poster: 'the-last-guardian.jpg'
    },
    {
        title: 'Crimson Skies',
        year: 2023,
        rating: '8.4',
        genre: 'Action, War',
        description: 'Elite pilots engage in aerial combat in the final days of war.',
        poster: 'crimson-skies.jpg'
    }
];

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    removeTransitions(); // NEW: Remove fade transitions
    setupMobileMenu();
    startAutoSlide();
    loadFeaturedMovies();
    setupSearch();
});

// NEW FUNCTION: Remove all fade transitions
function removeTransitions() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.style.transition = 'none';
    });
}

// Slider functions - UPDATED
function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    
    // Remove active from current
    slides[currentSlideIndex].classList.remove('active');
    indicators[currentSlideIndex].classList.remove('active');
    
    // Calculate next index
    currentSlideIndex += direction;
    
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    // Add active to next - instant, no fade
    slides[currentSlideIndex].classList.add('active');
    indicators[currentSlideIndex].classList.add('active');
    
    resetAutoSlide();
}

function currentSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    
    // Remove active from current
    slides[currentSlideIndex].classList.remove('active');
    indicators[currentSlideIndex].classList.remove('active');
    
    currentSlideIndex = index;
    
    // Add active to selected - instant
    slides[currentSlideIndex].classList.add('active');
    indicators[currentSlideIndex].classList.add('active');
    
    resetAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Load featured movies
function loadFeaturedMovies() {
    const grid = document.getElementById('featuredGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    featuredMovies.forEach(movie => {
        const card = createMovieCard(movie);
        grid.appendChild(card);
    });
}

// Create movie card
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.onclick = () => window.location.href = 'movies.html';
    
    card.innerHTML = `
        <div class="movie-poster">
            ${movie.poster && movie.poster !== 'images/movie1.jpg' && !movie.poster.includes('your-image')
                ? `<img src="${movie.poster}" alt="${movie.title}">`
                : `<span>${movie.title}</span>`}
        </div>
        <div class="movie-info">
            <div class="movie-title">${movie.title}</div>
            <div class="movie-meta">
                <span class="rating">★ ${movie.rating}</span>
                <span>${movie.year}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Setup search
function setupSearch() {
    const searchBox = document.getElementById('searchBox');
    let searchTimeout;
    
    searchBox.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const query = e.target.value.trim();
            if (query) {
                window.location.href = `movies.html?search=${encodeURIComponent(query)}`;
            }
        }, 500);
    });
}

// Setup mobile menu
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Play movie function
function playMovie(title) {
    alert(`Playing: ${title}\n\nThis is a demo. In a real website, this would open the video player.`);
}