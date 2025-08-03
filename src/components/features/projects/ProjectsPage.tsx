import { portfolioData } from "../../../data/api";
import type { Project, PaginatedProjects } from "../../../types";

export class ProjectsPage {
  static getPaginatedProjects(page: number = 1, pageSize: number = 2): PaginatedProjects {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const totalItems = portfolioData.projects.length;
    const totalPages = Math.ceil(totalItems / pageSize);

    return {
      items: portfolioData.projects.slice(startIndex, endIndex),
      currentPage: page,
      totalPages,
      pageSize,
      totalItems
    };
  }

  static render(currentPage: number = 1): string {
    const isMobile = window.innerWidth <= 768;
    const projectsPerPage = isMobile ? 1 : 2;
    const totalPages = Math.ceil(portfolioData.projects.length / projectsPerPage);
    currentPage = Math.min(Math.max(1, currentPage), totalPages);

    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = Math.min(startIndex + projectsPerPage, portfolioData.projects.length);
    const currentProjects = portfolioData.projects.slice(startIndex, endIndex);

    const formattedDate = (dateString: string) => {
      // Parse date components to avoid timezone issues
      const [year, month, day] = dateString.split('-').map(Number);
      const date = new Date(year, month - 1, day); // month is 0-indexed
      return date.toLocaleDateString('en-US', { 
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    };

    return `
      <div class="section-wrapper">
        <div class="section-header">
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-subtitle">Innovative solutions built with cutting-edge technologies</p>
        </div>
        
        <div class="projects-grid-wrapper">
          <div id="projectsGrid" class="projects-grid-modern">
            ${currentProjects.map((project, index) => `
              <div class="project-card-modern">
                <div class="project-card-header">
                  <div class="project-status-tags">
                    ${project.pinned ? `
                      <div class="status-tag star">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                        </svg>
                      </div>
                    ` : ''}
                  </div>
                  <div class="project-date">Updated ${formattedDate(project.lastUpdated)}</div>
                </div>
                
                <div class="project-content-modern">
                  <h3 class="project-title-modern">${project.title}</h3>
                  <p class="project-description-modern">${project.description}</p>
                  
                  <div class="project-tech-modern">
                    ${project.technologies.map(tech => `
                      <div class="tech-chip-modern">
                        <span class="tech-name">${tech}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>

                <div class="project-actions">
                  <a href="${project.githubUrl}" target="_blank" rel="noopener" class="view-repository-btn">
                    <svg width="20" height="20">
                      <use href="/assets/icons/sprite.svg#icon-github" />
                    </svg>
                    View Repository
                  </a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="carousel-controls">
          <button class="carousel-arrow prev" onclick="handlePageChange(${currentPage - 1}, ${currentPage})" ${currentPage === 1 ? 'disabled' : ''}>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          
          <button class="carousel-arrow next" onclick="handlePageChange(${currentPage + 1}, ${currentPage})" ${currentPage === totalPages ? 'disabled' : ''}>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
          </button>
        </div>
        
        <div class="carousel-dots">
          ${Array.from({ length: totalPages }, (_, i) => `
            <div class="carousel-dot ${i + 1 === currentPage ? 'active' : ''}" 
                 onclick="handlePageChange(${i + 1}, ${currentPage})">
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}

// Make ProjectsPage available globally
(window as any).ProjectsPage = ProjectsPage;

// Add this script to handle page transitions
const script = document.createElement('script');
script.textContent = `
  async function handlePageChange(newPage, currentPage) {
    if (newPage === currentPage) return;
    
    const projectsSection = document.getElementById('projects');
    if (!projectsSection) return;
    
    const projectsContainer = projectsSection.querySelector('.projects-container');
    if (!projectsContainer) return;
    
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    
    // Determine slide direction for infinite loop
    let direction;
    if (currentPage === 1 && newPage === window.ProjectsPage.getPaginatedProjects().totalPages) {
      direction = 'left';
    } else if (currentPage === window.ProjectsPage.getPaginatedProjects().totalPages && newPage === 1) {
      direction = 'right';
    } else {
      direction = newPage > currentPage ? 'right' : 'left';
    }
    
    // Add exit animation
    grid.style.opacity = '0';
    grid.style.transform = direction === 'right' ? 'translateX(-100%)' : 'translateX(100%)';
    
    // Wait for animation
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Preserve the section header and its animation state
    const sectionHeader = projectsSection.querySelector('.section-header');
    const title = sectionHeader?.querySelector('.section-title');
    const subtitle = sectionHeader?.querySelector('.section-subtitle');
    const titleHasAnimate = title?.classList.contains('animate');
    const subtitleHasAnimate = subtitle?.classList.contains('animate');

    // Update content
    projectsSection.innerHTML = ProjectsPage.render(newPage);

    // Restore animation states if they were present
    if (titleHasAnimate && title) {
      title.classList.add('animate');
    }
    if (subtitleHasAnimate && subtitle) {
      subtitle.classList.add('animate');
    }
    
    // Reset grid position
    const newGrid = document.getElementById('projectsGrid');
    if (newGrid) {
      requestAnimationFrame(() => {
        newGrid.style.opacity = '1';
        newGrid.style.transform = 'translateX(0)';
      });
    }
    
    // Force active state on projects nav link
    document.querySelectorAll('.nav-pill').forEach(link => {
      if (link.getAttribute('href') === '#projects') {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
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