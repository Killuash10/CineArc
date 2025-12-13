// Trending Page JavaScript with 20 items
const trendingItems = [
    {
        title: 'The Dark Universe',
        year: 2024,
        rating: '8.5',
        genre: 'Action, Sci-Fi',
        description: 'An epic journey through the cosmos as humanity faces its greatest threat yet.',
        poster: 'the-dark-universe.jpg'
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
        title: 'The Last Guardian',
        year: 2023,
        rating: '9.1',
        genre: 'Fantasy, Adventure',
        description: 'An ancient guardian awakens to protect the world from darkness.',
        poster: 'the-last-guardian.jpg'
    },
    {
        title: 'Money Heist',
        year: 2024,
        rating: '8.9',
        genre: 'Crime, Thriller',
        description: 'The world\'s greatest thief plans one last impossible heist.',
        poster: 'money-heist.jpg'
    },
    {
        title: 'The Last Samurai Rising',
        year: 2023,
        rating: '9.2',
        genre: 'Action, Historical',
        description: 'A legendary warrior returns to defend his homeland.',
        poster: 'the-last-samurai-rising.jpg'
    },
    {
        title: 'Pandemic',
        year: 2016,
        rating: '8.5',
        genre: 'Thriller, Sci-Fi',
        description: 'Scientists race to stop a deadly virus from wiping out humanity.',
        poster: 'pandemic.jpg'
    },
    {
        title: 'The Forgotten Kingdom',
        year: 2023,
        rating: '9.0',
        genre: 'Fantasy, Adventure',
        description: 'An archaeologist discovers a lost civilization with magical powers.',
        poster: 'the-forgotten-kingdom.jpg'
    },
    {
        title: 'The Silent Witness',
        year: 2023,
        rating: '8.8',
        genre: 'Crime, Mystery',
        description: 'A deaf woman becomes the only witness to a brutal crime.',
        poster: 'the-silent-witness.jpg'
    },
    {
        title: 'Velocity',
        year: 2024,
        rating: '8.4',
        genre: 'Action, Racing',
        description: 'An underground street racer gets caught up in international espionage.',
        poster: 'terminal-velocity.jpg'
    },
    {
        title: 'Bloodline Legacy',
        year: 2024,
        rating: '8.3',
        genre: 'Horror, Thriller',
        description: 'A family inherits a mansion with a dark secret.',
        poster: 'bloodline-legacy.jpg'
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
        title: 'Code Red',
        year: 2024,
        rating: '8.1',
        genre: 'Thriller, Drama',
        description: 'A cybersecurity expert races to stop a digital terrorist attack.',
        poster: 'code-red.jpg'
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
        title: 'Midnight Run',
        year: 2023,
        rating: '7.9',
        genre: 'Comedy, Action',
        description: 'A bounty hunter and his target become unlikely allies.',
        poster: 'midnight-run.jpg'
    },
    {
        title: 'Heart Of Stone',
        year: 2024,
        rating: '7.8',
        genre: 'Drama, Romance',
        description: 'A story of love and redemption in post-war America.',
        poster: 'heart-of-stone.jpg'
    },
    {
        title: 'Night Shift',
        year: 2024,
        rating: '7.7',
        genre: 'Horror, Thriller',
        description: 'A security guard\'s first night at an abandoned hospital becomes a nightmare.',
        poster: 'night-shift.jpg'
    },
    {
        title: 'Stardust Dreams',
        year: 2024,
        rating: '7.6',
        genre: 'Romance, Drama',
        description: 'Two aspiring musicians find love in the competitive world of music.',
        poster: 'stardust-dreams.jpg'
    },
    {
        title: 'Arctic Storm',
        year: 2023,
        rating: '7.5',
        genre: 'Action, Adventure',
        description: 'A rescue mission in the frozen Arctic turns into a fight for survival.',
        poster: 'arctic-storm.jpg'
    },
    {
        title: 'Crimson Skies',
        year: 2023,
        rating: '8.4',
        genre: 'Action, War',
        description: 'Elite pilots engage in aerial combat in the final days of war.',
        poster: 'crimson-skies.jpg'
    },
    {
        title: 'The Quantum Paradox',
        year: 2023,
        rating: '8.6',
        genre: 'Sci-Fi, Mystery',
        description: 'Scientists discover a parallel universe with dire consequences.',
        poster: 'the-quantum-paradox.jpg'
    }
];

let filteredItems = [...trendingItems];
let currentMovie = null;

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    setupSearch();
    setupModal();
    loadTrending();
});

// Load and display trending items
function loadTrending() {
    const grid = document.getElementById('trendingGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (filteredItems.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem; color: rgba(255,255,255,0.6);">No trending items found.</p>';
        return;
    }
    
    filteredItems.forEach(item => {
        const card = createMovieCard(item);
        grid.appendChild(card);
    });
}

// Create movie card
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.onclick = () => openModal(movie);
    
    card.innerHTML = `
        <div class="movie-poster">
            ${movie.poster ? `<img src="${movie.poster}" alt="${movie.title}" onerror="this.parentElement.innerHTML='<span>${movie.title}</span>'">` : `<span>${movie.title}</span>`}
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
    
    if (searchBox) {
        searchBox.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                performSearch(e.target.value);
            }, 300);
        });
    }
}

// Perform search
function performSearch(query) {
    if (query.trim() === '') {
        filteredItems = [...trendingItems];
        loadTrending();
        return;
    }
    
    filteredItems = trendingItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.genre.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );
    
    loadTrending();
}

// Setup modal
function setupModal() {
    const modal = document.getElementById('movieModal');
    const closeBtn = document.querySelector('.close-btn');
    
    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.style.display = 'none';
        };
    }
    
    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// Open modal with movie details
function openModal(movie) {
    currentMovie = movie;
    const modal = document.getElementById('movieModal');
    const modalPoster = document.getElementById('modalPoster');
    const modalTitle = document.getElementById('modalTitle');
    const modalRating = document.getElementById('modalRating');
    const modalYear = document.getElementById('modalYear');
    const modalGenre = document.getElementById('modalGenre');
    const modalDescription = document.getElementById('modalDescription');
    
    modalPoster.innerHTML = movie.poster 
        ? `<img src="${movie.poster}" alt="${movie.title}" onerror="this.parentElement.innerHTML='<span>${movie.title}</span>'">`
        : `<span>${movie.title}</span>`;
    modalTitle.textContent = movie.title;
    modalRating.textContent = `★ ${movie.rating}`;
    modalYear.textContent = movie.year;
    modalGenre.textContent = movie.genre;
    modalDescription.textContent = movie.description;
    
    modal.style.display = 'block';
}

// Play movie function
function playMovie() {
    if (currentMovie) {
        alert(`Playing: ${currentMovie.title}\n\nThis is a demo. In a real website, this would open the video player.`);
    }
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