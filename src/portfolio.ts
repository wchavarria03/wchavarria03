import { ProjectsPage } from './components/features/projects/ProjectsPage';
import { HomePage } from './components/features/home/HomePage';
import { AboutPage } from './components/features/about/AboutPage';
import { SkillsPage } from './components/features/skills/SkillsPage';
import { BlogPage } from './components/features/blog/BlogPage';
import { portfolioData } from './data/api';

// Add this script to handle carousel transitions
const script = document.createElement('script');
script.textContent = `
  function handlePageChange(newPage, currentPage) {
    if (newPage === currentPage) return;
    
    const projectsSection = document.getElementById('projects');
    if (!projectsSection) return;
    
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    
    // Update content
    projectsSection.innerHTML = ProjectsPage.render(newPage);
    
    // Initialize any new elements
    const newGrid = document.getElementById('projectsGrid');
    if (newGrid) {
      requestAnimationFrame(() => {
        newGrid.style.opacity = '1';
      });
    }
  }

  // Initialize grid position
  document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('projectsGrid');
    if (grid) {
      grid.style.opacity = '1';
      grid.style.transform = 'translateX(0)';
    }
  });
`;
document.head.appendChild(script);

export function initializePortfolio() {
  const app = document.getElementById('app');
  if (!app) return;

  // Initial render
  renderPortfolio(1);
}

function renderPortfolio(currentPage: number = 1) {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <header class="header">
      <nav class="nav">
        <div class="nav-pill-container">
          <a href="#home" class="nav-pill active">Home</a>
          <a href="#about" class="nav-pill">About</a>
          <a href="#skills" class="nav-pill">Skills</a>
          <a href="#projects" class="nav-pill">Projects</a>
          <!-- Blog section temporarily disabled -->
          <!-- <a href="#blog" class="nav-pill">Blog</a> -->
        </div>
      </nav>
    </header>

    <main class="main-content">
      <section id="home" class="page-section hero-section">
        ${HomePage.render()}
      </section>
      <section id="about" class="page-section section-bg-dots">
        ${AboutPage.render()}
      </section>
      <section id="skills" class="page-section section-bg-grid">
        ${SkillsPage.render()}
      </section>
      <section id="projects" class="page-section section-bg-hexagon">
        ${ProjectsPage.render(currentPage)}
      </section>
      <!-- Blog section temporarily disabled -->
      <!-- <section id="blog" class="page-section section-bg-diagonal">
        ${BlogPage.render()}
      </section> -->
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-links">
            <div class="footer-links-row">
              <a href="${portfolioData.github}" target="_blank" rel="noopener" class="footer-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <use href="/assets/icons/sprite.svg#icon-github"></use>
                </svg>
                GitHub
              </a>
              <a href="${portfolioData.linkedin}" target="_blank" rel="noopener" class="footer-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <use href="/assets/icons/sprite.svg#icon-linkedin"></use>
                </svg>
                LinkedIn
              </a>
              <a href="mailto:${portfolioData.email}" class="footer-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <use href="/assets/icons/sprite.svg#icon-email"></use>
                </svg>
                Email
              </a>
            </div>
            <div class="footer-links-row footer-links-centered">
              <a href="mailto:${portfolioData.email}" class="footer-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <use href="/assets/icons/sprite.svg#icon-email"></use>
                </svg>
                Email
              </a>
            </div>
          </div>
          <div class="footer-copyright">
            <p>&copy; <span id="current-year"></span> ${portfolioData.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  `;

  // Re-initialize animations and behaviors after content update
  initializeScrollAnimations();
  initializeParticles();
  initializeTypingAnimation();
  (window as any).initializeScrollBehavior();
}

(window as any).initializeScrollBehavior = function(): void {
  const topNavLinks = document.querySelectorAll('.nav-pill');
  const sections = document.querySelectorAll('.page-section');

  // Smooth scroll for nav links
  topNavLinks.forEach(link => {
    link.addEventListener('click', (e: Event) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');

      if (targetId === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (targetId) {
        document.querySelector(targetId)?.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Active nav link on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetId = `#${entry.target.id}`;
        
        // Update top nav
        topNavLinks.forEach(link => {
          if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { 
    threshold: 0.2,
    rootMargin: '-20% 0px -20% 0px'
  });

  // Disconnect any existing observers
  observer.disconnect();

  // Observe all sections
  sections.forEach(section => {
    observer.observe(section);
  });

  // Set initial active state based on current scroll position
  const currentScroll = window.scrollY;
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top + currentScroll;
    const sectionBottom = sectionTop + rect.height;
    
    if (currentScroll >= sectionTop - window.innerHeight * 0.3 && 
        currentScroll < sectionBottom - window.innerHeight * 0.3) {
      const targetId = `#${section.id}`;
      topNavLinks.forEach(link => {
        if (link.getAttribute('href') === targetId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
}

export function initializeScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  animatedElements.forEach(element => {
    animationObserver.observe(element);
  });
}

export function initializeParticles() {
  const particlesContainer = document.querySelector('.hero-particles') as HTMLElement;
  if (!particlesContainer) return;

  function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random size between 2px and 6px
    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    // Random horizontal position
    particle.style.left = Math.random() * 100 + '%';
    
    // Random animation delay
    particle.style.animationDelay = Math.random() * 6 + 's';
    
    particlesContainer.appendChild(particle);
    
    // Remove particle after animation completes
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, 10000);
  }

  // Create initial particles
  for (let i = 0; i < 15; i++) {
    setTimeout(() => createParticle(), i * 400);
  }

  // Continue creating particles
  setInterval(createParticle, 800);
}

export function initializeTypingAnimation() {
  const typingElement = document.getElementById('typing-title') as HTMLElement;
  if (!typingElement) return;

  const titles = [
    'Staff Engineer',
    'Full-Stack Developer', 
    'Neovim Enthusiast',
  ];
  
  let currentTitleIndex = 0;
  let currentText = '';
  let isDeleting = false;
  let isFirstRun = true;
  
  function typeWriter() {
    const currentTitle = titles[currentTitleIndex];
    
    if (isFirstRun) {
      isFirstRun = false;
      typingElement.textContent = '';
    }
    
    const shouldSwitch = isDeleting && currentText === '';
    
    if (shouldSwitch) {
      isDeleting = false;
      currentTitleIndex = (currentTitleIndex + 1) % titles.length;
      setTimeout(typeWriter, 500);
      return;
    }
    
    if (isDeleting) {
      currentText = currentTitle.substring(0, currentText.length - 1);
    } else {
      currentText = currentTitle.substring(0, currentText.length + 1);
    }
    
    typingElement.textContent = currentText;
    
    let typeSpeed = isDeleting ? 100 : 150;
    
    if (!isDeleting && currentText === currentTitle) {
      typeSpeed = 2000;
      isDeleting = true;
    }
    
    setTimeout(typeWriter, typeSpeed);
  }
  
  // Start immediately
  typeWriter();
}