// Series Page JavaScript with 20 series
const allSeries = [
    {
        title: 'Chronicles of the Realm',
        year: 2024,
        rating: '9.3',
        genre: 'Fantasy, Drama',
        description: 'Seven kingdoms battle for control of a magical realm. An epic saga spanning multiple seasons.',
        poster: 'images/series1.jpg'
    },
    {
        title: 'Tech Wars',
        year: 2024,
        rating: '8.8',
        genre: 'Sci-Fi, Thriller',
        description: 'Corporate espionage in the world of cutting-edge technology. Silicon Valley meets international intrigue.',
        poster: 'images/series2.jpg'
    },
    {
        title: 'Night Patrol',
        year: 2024,
        rating: '8.5',
        genre: 'Crime, Drama',
        description: 'Officers navigate the dangerous streets of Metro City. A gritty police procedural with heart.',
        poster: 'images/series3.jpg'
    },
    {
        title: 'Stellar Academy',
        year: 2024,
        rating: '8.1',
        genre: 'Sci-Fi, Adventure',
        description: 'Young cadets train to become the next generation of space explorers. Think Top Gun meets Star Trek.',
        poster: 'images/series4.jpg'
    },
    {
        title: 'The Underground',
        year: 2023,
        rating: '9.0',
        genre: 'Action, Thriller',
        description: 'A secret resistance fights against a totalitarian government. Revolution is brewing.',
        poster: 'images/series5.jpg'
    },
    {
        title: 'Medical Mysteries',
        year: 2024,
        rating: '8.7',
        genre: 'Drama, Medical',
        description: 'Brilliant doctors solve the most perplexing medical cases. Every episode is a new puzzle.',
        poster: 'images/series6.jpg'
    },
    {
        title: 'The Witching Hour',
        year: 2023,
        rating: '8.9',
        genre: 'Horror, Supernatural',
        description: 'A coven of witches protects humanity from dark forces. Magic meets modern day.',
        poster: 'images/series7.jpg'
    },
    {
        title: 'Dynasty Rising',
        year: 2024,
        rating: '8.4',
        genre: 'Drama, Business',
        description: 'Family drama and corporate warfare in the world of high finance. Power comes at a price.',
        poster: 'images/series8.jpg'
    },
    {
        title: 'Time Travelers',
        year: 2023,
        rating: '9.1',
        genre: 'Sci-Fi, Adventure',
        description: 'A team jumps through time to prevent historical disasters. But every action has consequences.',
        poster: 'images/series9.jpg'
    },
    {
        title: 'The Last Colony',
        year: 2024,
        rating: '8.6',
        genre: 'Sci-Fi, Drama',
        description: 'Humanity\'s first colony on Mars faces extinction. Survival is not guaranteed.',
        poster: 'images/series10.jpg'
    },
    {
        title: 'Shadow Agents',
        year: 2024,
        rating: '8.3',
        genre: 'Action, Spy',
        description: 'Elite spies operate in the shadows to protect national security. Trust no one.',
        poster: 'images/series11.jpg'
    },
    {
        title: 'The Culinary Wars',
        year: 2023,
        rating: '7.9',
        genre: 'Drama, Comedy',
        description: 'Rival chefs compete for Michelin stars and culinary supremacy. The kitchen is a battlefield.',
        poster: 'images/series12.jpg'
    },
    {
        title: 'Legends of Tomorrow',
        year: 2024,
        rating: '8.8',
        genre: 'Fantasy, Adventure',
        description: 'Ancient legends come to life in modern times. Mythology meets reality.',
        poster: 'images/series13.jpg'
    },
    {
        title: 'The Mentalist Files',
        year: 2023,
        rating: '8.5',
        genre: 'Crime, Mystery',
        description: 'A brilliant mentalist helps solve impossible crimes. The mind is the greatest weapon.',
        poster: 'images/series14.jpg'
    },
    {
        title: 'Wasteland Warriors',
        year: 2024,
        rating: '8.2',
        genre: 'Action, Post-Apocalyptic',
        description: 'Survivors fight for resources in a post-nuclear world. Only the strong survive.',
        poster: 'images/series15.jpg'
    },
    {
        title: 'High School Chronicles',
        year: 2024,
        rating: '7.8',
        genre: 'Drama, Teen',
        description: 'Teenagers navigate the complexities of modern high school life. Growing up is hard.',
        poster: 'images/series16.jpg'
    },
    {
        title: 'The Archaeologist',
        year: 2023,
        rating: '8.7',
        genre: 'Adventure, Mystery',
        description: 'An archaeologist uncovers ancient secrets that could change history. Adventure awaits.',
        poster: 'images/series17.jpg'
    },
    {
        title: 'Corporate Ladder',
        year: 2024,
        rating: '8.1',
        genre: 'Drama, Comedy',
        description: 'Office politics and ambition collide in this workplace drama. Climbing to the top is cutthroat.',
        poster: 'images/series18.jpg'
    },
    {
        title: 'The Paranormal Files',
        year: 2023,
        rating: '8.6',
        genre: 'Horror, Mystery',
        description: 'Investigators explore real paranormal phenomena. The truth is out there.',
        poster: 'images/series19.jpg'
    },
    {
        title: 'Ocean Deep',
        year: 2024,
        rating: '9.0',
        genre: 'Sci-Fi, Adventure',
        description: 'Scientists discover an underwater civilization. The ocean holds many secrets.',
        poster: 'images/series20.jpg'
    }
];

let filteredSeries = [...allSeries];
let currentSeries = null;

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    setupSearch();
    setupModal();
    loadSeries();
});

// Load and display series
function loadSeries() {
    const grid = document.getElementById('seriesGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (filteredSeries.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem; color: rgba(255,255,255,0.6);">No series found.</p>';
        return;
    }
    
    filteredSeries.forEach(series => {
        const card = createSeriesCard(series);
        grid.appendChild(card);
    });
}

// Create series card
function createSeriesCard(series) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.onclick = () => openModal(series);
    
    card.innerHTML = `
        <div class="movie-poster">
            ${series.poster ? `<img src="${series.poster}" alt="${series.title}" onerror="this.parentElement.innerHTML='<span>${series.title}</span>'">` : `<span>${series.title}</span>`}
        </div>
        <div class="movie-info">
            <div class="movie-title">${series.title}</div>
            <div class="movie-meta">
                <span class="rating">★ ${series.rating}</span>
                <span>${series.year}</span>
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
        filteredSeries = [...allSeries];
        loadSeries();
        return;
    }
    
    filteredSeries = allSeries.filter(series => 
        series.title.toLowerCase().includes(query.toLowerCase()) ||
        series.genre.toLowerCase().includes(query.toLowerCase()) ||
        series.description.toLowerCase().includes(query.toLowerCase())
    );
    
    loadSeries();
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

// Open modal with series details
function openModal(series) {
    currentSeries = series;
    const modal = document.getElementById('movieModal');
    const modalPoster = document.getElementById('modalPoster');
    const modalTitle = document.getElementById('modalTitle');
    const modalRating = document.getElementById('modalRating');
    const modalYear = document.getElementById('modalYear');
    const modalGenre = document.getElementById('modalGenre');
    const modalDescription = document.getElementById('modalDescription');
    
    modalPoster.innerHTML = series.poster 
        ? `<img src="${series.poster}" alt="${series.title}" onerror="this.parentElement.innerHTML='<span>${series.title}</span>'">`
        : `<span>${series.title}</span>`;
    modalTitle.textContent = series.title;
    modalRating.textContent = `★ ${series.rating}`;
    modalYear.textContent = series.year;
    modalGenre.textContent = series.genre;
    modalDescription.textContent = series.description;
    
    modal.style.display = 'block';
}

// Play series function
function playMovie() {
    if (currentSeries) {
        alert(`Playing: ${currentSeries.title}\n\nThis is a demo. In a real website, this would open the video player.`);
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