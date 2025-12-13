// Movies Page JavaScript with 20 movies
const allMovies = [
    {
        title: 'The Dark Universe',
        year: 2024,
        rating: '8.5',
        genre: 'Action, Sci-Fi',
        description: 'An epic journey through the cosmos as humanity faces its greatest threat yet. When a mysterious force threatens to destroy the universe, a team of unlikely heroes must band together.',
        poster: 'the-dark-universe.jpg'
    },
    {
        title: 'Shadow Protocol',
        year: 2024,
        rating: '8.2',
        genre: 'Thriller, Action',
        description: 'A secret agent must stop a global conspiracy before time runs out. Racing against the clock, Agent Marcus Cole uncovers a plot that could change the world forever.',
        poster: 'shadow-protocol.jpg'
    },
    {
        title: 'Echoes of Tomorrow',
        year: 2024,
        rating: '8.7',
        genre: 'Drama, Sci-Fi',
        description: 'A mind-bending tale of time travel and the consequences of changing the past. Dr. Sarah Chen discovers that altering even the smallest event can have catastrophic results.',
        poster: 'echoes-of-tomorrow.jpg'
    },
    {
        title: 'Neon City',
        year: 2024,
        rating: '8.0',
        genre: 'Action, Cyberpunk',
        description: 'In a dystopian future, one hacker holds the key to freedom. Set in 2077, where corporations control everything, a young hacker named Zero fights for liberation.',
        poster: 'neon-city.jpg'
    },
    {
        title: 'The Last Guardian',
        year: 2023,
        rating: '9.1',
        genre: 'Fantasy, Adventure',
        description: 'An ancient guardian awakens to protect the world from darkness. When an evil sorcerer threatens the realm, the legendary Guardian of Light returns after a thousand years.',
        poster: 'the-last-guardian.jpg'
    },
    {
        title: 'Crimson Skies',
        year: 2023,
        rating: '8.4',
        genre: 'Action, War',
        description: 'Elite pilots engage in aerial combat in the final days of war. Based on true events, this epic war drama follows the legendary Red Squadron.',
        poster: 'crimson-skies.jpg'
    },
    {
        title: 'Midnight Run',
        year: 2023,
        rating: '7.9',
        genre: 'Comedy, Action',
        description: 'A bounty hunter and his target become unlikely allies. What starts as a simple job turns into a cross-country adventure filled with danger and laughs.',
        poster: 'midnight-run.jpg'
    },
    {
        title: 'The Quantum Paradox',
        year: 2023,
        rating: '8.6',
        genre: 'Sci-Fi, Mystery',
        description: 'Scientists discover a parallel universe with dire consequences. When physicist Dr. James Reed opens a portal to another dimension, reality itself begins to unravel.',
        poster: 'the-quantum-paradox.jpg'
    },
    {
        title: 'Bloodline Legacy',
        year: 2024,
        rating: '8.3',
        genre: 'Horror, Thriller',
        description: 'A family inherits a mansion with a dark secret. The Blackwood family moves into their ancestral home, only to discover a horrifying curse that spans generations.',
        poster: 'bloodline-legacy.jpg'
    },
    {
        title: 'heart of stone',
        year: 2024,
        rating: '7.8',
        genre: 'Drama, Romance',
        description: 'A story of love and redemption in post-war America. Two damaged souls find hope in each other as they navigate life after trauma.',
        poster: 'heart-of-stone.jpg'
    },
    {
        title: 'money-heist',
        year: 2024,
        rating: '8.9',
        genre: 'Crime, Thriller',
        description: 'The world\'s greatest thief plans one last impossible heist. Michael "The Ghost" Kane assembles a team for the biggest score of their lives.',
        poster: 'money-heist.jpg'
    },
    {
        title: 'Arctic Storm',
        year: 2023,
        rating: '7.5',
        genre: 'Action, Adventure',
        description: 'A rescue mission in the frozen Arctic turns into a fight for survival. When a research station goes dark, a special ops team discovers something terrifying.',
        poster: 'arctic-storm.jpg'
    },
    {
        title: 'Code Red',
        year: 2024,
        rating: '8.1',
        genre: 'Thriller, Drama',
        description: 'A cybersecurity expert races to stop a digital terrorist attack. With only 24 hours, Alex must prevent the collapse of the global internet.',
        poster: 'code-red.jpg'
    },
    {
        title: 'The Forgotten Kingdom',
        year: 2023,
        rating: '9.0',
        genre: 'Fantasy, Adventure',
        description: 'An archaeologist discovers a lost civilization with magical powers. Dr. Elena Martinez finds herself caught between two worlds in this epic adventure.',
        poster: 'the-forgotten-kingdom.jpg'
    },
    {
        title: 'Night Shift',
        year: 2024,
        rating: '7.7',
        genre: 'Horror, Thriller',
        description: 'A security guard\'s first night at an abandoned hospital becomes a nightmare. What starts as a routine job becomes a fight to survive until dawn.',
        poster: 'night-shift.jpg'
    },
    {
        title: 'Terminal Velocity',
        year: 2024,
        rating: '8.4',
        genre: 'Action, Racing',
        description: 'An underground street racer gets caught up in international espionage. Speed and danger collide in this high-octane thriller.',
        poster: 'terminal-velocity.jpg'
    },
    {
        title: 'The Silent Witness',
        year: 2023,
        rating: '8.8',
        genre: 'Crime, Mystery',
        description: 'A deaf woman becomes the only witness to a brutal crime. Detective Sarah Blake must protect her while solving the case.',
        poster: 'the-silent-witness.jpg'
    },
    {
        title: 'Stardust Dreams',
        year: 2024,
        rating: '7.6',
        genre: 'Romance, Drama',
        description: 'Two aspiring musicians find love in the competitive world of music. A heartwarming story about following your dreams and finding love along the way.',
        poster: 'stardust-dreams.jpg'
    },
    {
        title: 'The Last Samurai Rising',
        year: 2023,
        rating: '9.2',
        genre: 'Action, Historical',
        description: 'A legendary warrior returns to defend his homeland. Set in feudal Japan, this epic tale of honor and sacrifice will leave you breathless.',
        poster: 'the-last-samurai-rising.jpg'
    },
    {
        title: 'Pandemic',
        year: 2024,
        rating: '8.5',
        genre: 'Thriller, Sci-Fi',
        description: 'Scientists race to stop a deadly virus from wiping out humanity. Based on real scientific research, this thriller hits close to home.',
        poster: 'pandemic.jpg'
    }
];

let filteredMovies = [...allMovies];
let currentMovie = null;

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    setupFilters();
    setupSearch();
    setupModal();
    loadMovies();
    checkURLParams();
});

// Load and display movies
function loadMovies() {
    const grid = document.getElementById('moviesGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (filteredMovies.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem; color: rgba(255,255,255,0.6);">No movies found matching your criteria.</p>';
        return;
    }
    
    filteredMovies.forEach(movie => {
        const card = createMovieCard(movie);
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

// Setup filters
function setupFilters() {
    const genreFilter = document.getElementById('genreFilter');
    const yearFilter = document.getElementById('yearFilter');
    const ratingFilter = document.getElementById('ratingFilter');
    
    if (genreFilter) {
        genreFilter.addEventListener('change', applyFilters);
    }
    if (yearFilter) {
        yearFilter.addEventListener('change', applyFilters);
    }
    if (ratingFilter) {
        ratingFilter.addEventListener('change', applyFilters);
    }
}

// Apply filters
function applyFilters() {
    const genreValue = document.getElementById('genreFilter').value;
    const yearValue = document.getElementById('yearFilter').value;
    const ratingValue = document.getElementById('ratingFilter').value;
    
    filteredMovies = allMovies.filter(movie => {
        let matches = true;
        
        if (genreValue !== 'all') {
            matches = matches && movie.genre.toLowerCase().includes(genreValue.toLowerCase());
        }
        
        if (yearValue !== 'all') {
            matches = matches && movie.year.toString() === yearValue;
        }
        
        if (ratingValue !== 'all') {
            matches = matches && parseFloat(movie.rating) >= parseFloat(ratingValue);
        }
        
        return matches;
    });
    
    loadMovies();
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
        filteredMovies = [...allMovies];
        loadMovies();
        return;
    }
    
    filteredMovies = allMovies.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.genre.toLowerCase().includes(query.toLowerCase()) ||
        movie.description.toLowerCase().includes(query.toLowerCase())
    );
    
    loadMovies();
}

// Check URL parameters for search
function checkURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    
    if (searchQuery) {
        const searchBox = document.getElementById('searchBox');
        if (searchBox) {
            searchBox.value = searchQuery;
            performSearch(searchQuery);
        }
    }
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