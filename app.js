// J.R. Ethiraaj Portfolio - Interactivity & Filmography

document.addEventListener('DOMContentLoaded', () => {
  // Initialize UI controls
  initHeaderScroll();
  initNavigationObserver();
  initMobileMenu();
  initScrollReveal();
  // Render Filmography and Initialize Modal & Filters
  initFilmography();
});

/* ==========================================================================
   UI UTILITY & NAVIGATION FUNCTIONS
   ========================================================================== */

// Shrink header on scroll
function initHeaderScroll() {
  const header = document.querySelector('.main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Mobile navigation dropdown
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDropdown = document.getElementById('mobile-dropdown');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const icon = mobileMenuBtn.querySelector('i');

  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileDropdown.classList.toggle('open');
    if (isOpen) {
      icon.setAttribute('data-lucide', 'x');
      lucide.createIcons();
    } else {
      icon.setAttribute('data-lucide', 'menu');
      lucide.createIcons();
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileDropdown.classList.remove('open');
      icon.setAttribute('data-lucide', 'menu');
      lucide.createIcons();
    });
  });
}

// Highlight active section in navigation using Intersection Observer
function initNavigationObserver() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  const options = {
    root: null,
    threshold: 0.3,
    rootMargin: '-80px 0px 0px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, options);

  sections.forEach(section => observer.observe(section));
}

// Fade in elements when scrolling into viewport
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  
  const options = {
    root: null,
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // Reveal only once
      }
    });
  }, options);

  revealElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   FILMOGRAPHY DATABASE & CONTROLS
   ========================================================================== */

const FEATURED_FILMS = [
  {
    title: 'Ooru Peru Bhiravakona',
    year: '2024',
    role: 'Sound Designer',
    genre: 'Supernatural Fantasy Thriller',
    poster: 'images/ooru_peru_bhiravakona_poster.jpg',
    trailer: 'https://www.youtube.com/watch?v=opGD_YmHwdk'
  },
  {
    title: 'Major',
    year: '2022',
    role: 'Sound Designer',
    genre: 'Biographical Action Drama',
    poster: 'images/major_poster.jpg',
    trailer: 'https://www.youtube.com/watch?v=LbTN2dOJcbQ'
  },
  {
    title: 'Narappa',
    year: '2021',
    role: 'Sound Designer',
    genre: 'Period Action Drama',
    poster: 'images/narappa_poster.jpg',
    trailer: 'https://www.youtube.com/watch?v=GNJ-kT6gFhQ'
  },
  {
    title: 'Evaru',
    year: '2019',
    role: 'Sound Designer & SFX Editor',
    genre: 'Mystery Suspense Thriller',
    poster: 'images/evaru_poster.jpg',
    trailer: 'https://www.youtube.com/watch?v=sScDim8DedY'
  },
  {
    title: 'Majili',
    year: '2019',
    role: 'Sound Effects Designer',
    genre: 'Romantic Sports Drama',
    poster: 'images/majili_poster.jpg',
    trailer: 'https://www.youtube.com/watch?v=R9VF3m7UiLw'
  },
  {
    title: 'Oh Baby',
    year: '2019',
    role: 'Sound Effects Editor',
    genre: 'Fantasy Comedy Drama',
    poster: 'images/oh_baby_poster.jpg',
    trailer: 'https://www.youtube.com/watch?v=kgnJFZZV728'
  },
  {
    title: 'RX100',
    year: '2018',
    role: 'Sound Effects Editor',
    genre: 'Romantic Action Drama',
    poster: 'images/rx100_poster.jpg',
    trailer: 'https://www.youtube.com/watch?v=IbPL4FUTvXY'
  },
  {
    title: 'Hello Guru Prema Kosame',
    year: '2018',
    role: 'Sound Effects Editor',
    genre: 'Romantic Comedy',
    poster: 'images/hello_guru_prema_kosame_poster.jpg',
    trailer: 'https://www.youtube.com/watch?v=8Q4o87KPInY'
  },
  {
    title: 'Hello!',
    year: '2017',
    role: 'Sound Designer',
    genre: 'Romantic Action Thriller',
    poster: 'images/hello_poster.jpg',
    trailer: 'https://www.youtube.com/watch?v=6WgnE6J07e8'
  },
  {
    title: 'Nenu Local',
    year: '2017',
    role: 'Sound Effects Editor',
    genre: 'Action Comedy Romance',
    poster: 'images/nenu_local_poster.jpg',
    trailer: 'https://www.youtube.com/watch?v=lylc7eY6yRU'
  },
  {
    title: 'Ninnu Kori',
    year: '2017',
    role: 'Sound Effects Editor',
    genre: 'Romantic Comedy Drama',
    poster: 'images/ninnu_kori_poster.jpg',
    trailer: 'https://www.youtube.com/watch?v=Ia6EXfqKiV4'
  },
  {
    title: 'Fidaa',
    year: '2017',
    role: 'Sound Effects Editor & Designer',
    genre: 'Romantic Drama',
    poster: 'images/fidaa_poster.jpg',
    trailer: 'https://www.youtube.com/watch?v=AVtvjfoXNXc'
  },
  {
    title: 'Nannaku Prematho',
    year: '2016',
    role: 'Sound Effects Editor',
    genre: 'Action Suspense Thriller',
    poster: 'images/nannaku_prematho_poster.jpg',
    trailer: 'https://www.youtube.com/watch?v=Om69gF1iiT4'
  },
  {
    title: 'Oopiri',
    year: '2016',
    role: 'Sound Effects Designer',
    genre: 'Comedy Drama',
    poster: 'images/oopiri_poster.jpg',
    trailer: 'https://www.youtube.com/watch?v=e1ddsJ38D5Q'
  },
  {
    title: 'Raju Gari Gadhi',
    year: '2015',
    role: 'Sound Effects Editor',
    genre: 'Horror Comedy',
    poster: 'images/raju_gari_gadhi_poster.jpg',
    trailer: 'https://www.youtube.com/watch?v=YBrooCamrbY'
  },
  {
    title: 'Aagadu',
    year: '2014',
    role: 'Sound Designer',
    genre: 'Action Comedy',
    poster: 'images/aagadu_poster.jpg',
    trailer: 'https://www.youtube.com/watch?v=qWM09LFpJ8Q'
  },
  {
    title: 'Yevadu',
    year: '2014',
    role: 'Sound Effects Designer',
    genre: 'Action Thriller',
    poster: 'images/yevadu_poster.jpg',
    trailer: 'https://www.youtube.com/watch?v=vBIRjqcr5AQ'
  },
  {
    title: 'Adhurs',
    year: '2010',
    role: 'Sound Effects Editor',
    genre: 'Action Comedy',
    poster: 'images/adhurs_poster.jpg',
    trailer: 'https://www.youtube.com/watch?v=IVf7tyP_JCs'
  },
  {
    title: 'Don',
    year: '2007',
    role: 'Sound Effects Editor',
    genre: 'Action / Crime Thriller',
    poster: 'images/don_poster.jpg',
    trailer: 'https://www.youtube.com/watch?v=JjHs0xin1d0'
  },
  {
    title: 'Athadu',
    year: '2005',
    role: 'Sound Designer & SFX Editor',
    genre: 'Action / Crime Thriller',
    poster: 'images/athadu_poster.jpg',
    trailer: 'https://www.youtube.com/watch?v=KWt9dzrc1Go'
  },
  {
    title: 'Mass',
    year: '2004',
    role: 'Sound Effects Editor',
    genre: 'Action / Romance',
    poster: 'images/mass_poster.jpg',
    trailer: 'https://www.youtube.com/watch?v=uMs-C3EBYDI'
  },
  {
    title: 'Okkadu',
    year: '2003',
    role: 'Sound Effects Editor',
    genre: 'Romantic Sports Action',
    poster: 'images/okkadu_poster.jpg',
    trailer: 'https://www.youtube.com/watch?v=OlKmTiZ1Nmc'
  }
];

const OTHER_MOVIES = [
  'Honey', 'Mission C1000', 'Rakshana', 'Prabuthwa Junior Kalashala', 
  'Maa Kaali', 'Chaurya Paatham', 'Jetty', 'Tuck Jagadish', 
  'O Pitta Katha', 'Savaari', 'Dorasaani', 'Lakshmi\'s NTR', 
  'Bhairava Geetha', 'Aha Naa Pellanta', 'Fitting Master', 'Anasuya'
];

function initFilmography() {
  const container = document.getElementById('films-container');
  const otherContainer = document.getElementById('other-films-container');

  if (!container) return;

  // 1. Render Featured Films
  container.innerHTML = '';
  FEATURED_FILMS.forEach(film => {
    const card = document.createElement('div');
    card.className = 'film-card';
    
    card.innerHTML = `
      <div class="film-image-container">
        <img src="${film.poster}" alt="${film.title} Poster" class="film-poster" loading="lazy">
      </div>
      <a href="${film.trailer}" target="_blank" rel="noopener noreferrer" class="trailer-link">
        <i data-lucide="play-circle"></i>
        <span>Click to watch trailer</span>
      </a>
      <div class="film-details">
        <span class="film-year">${film.year}</span>
        <h3 class="film-title">${film.title}</h3>
        <p class="film-role">${film.role}</p>
        <div class="film-tags">
          <span class="tag">${film.genre}</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  // 2. Render Other Movies (Text Only)
  if (otherContainer) {
    otherContainer.innerHTML = '';
    OTHER_MOVIES.forEach(movie => {
      const tag = document.createElement('div');
      tag.className = 'other-film-item';
      tag.textContent = movie;
      otherContainer.appendChild(tag);
    });
  }

  // Refresh Lucide icons in dynamically added HTML if lucide is available
  if (window.lucide) {
    lucide.createIcons();
  }
}
