import { portfolioData } from "../../../data/api";
import { loadIcon, getIconSVG } from "../../../lib/utils/icons";

export class HomePage {
  static render(): string {
    const currentYear = new Date().getFullYear();
    const experience = currentYear - 2016;

    return `
      <section class="page hero-page-modern">
        <div class="hero-background">
          <div class="hero-grid-overlay"></div>
          <div class="hero-particles"></div>
        </div>
        
        <div class="container hero-container-modern">
          <div class="hero-status">
            <div class="hero-location">
              <span>Costa Rica 🇨🇷</span>
            </div>
          </div>
          
          <div class="hero-content-modern">
            <div class="hero-greeting">
              <span class="greeting-text">Hello, I'm</span>
            </div>
            
            <h1 class="hero-name-modern">
              <span class="name-highlight">${portfolioData.name}</span>
            </h1>
            
            <div class="hero-title-wrapper">
              <h2 class="hero-title-modern">
                <span class="typing-text" id="typing-title"></span>
              </h2>
              <div class="title-underline"></div>
            </div>
            
            <p class="hero-bio-modern">${portfolioData.bio}</p>
            
            <div class="hero-stats">
              <div class="stat-item">
                <div class="stat-number">${experience}+</div>
                <div class="stat-label">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div class="hero-actions">
            <div class="hero-social-links">
              <div class="social-links-row">
                <a href="${portfolioData.github}" target="_blank" rel="noopener" class="social-link-modern github">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <use href="/assets/icons/sprite.svg#icon-github"></use>
                  </svg>
                  GitHub
                </a>
                <a href="${portfolioData.linkedin}" target="_blank" rel="noopener" class="social-link-modern linkedin">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <use href="/assets/icons/sprite.svg#icon-linkedin"></use>
                  </svg>
                  LinkedIn
                </a>
                <a href="mailto:${portfolioData.email}" class="social-link-modern email">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <use href="/assets/icons/sprite.svg#icon-email"></use>
                  </svg>
                  Email
                </a>
              </div>
              <div class="social-links-row social-links-centered">
                <a href="mailto:${portfolioData.email}" class="social-link-modern email">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <use href="/assets/icons/sprite.svg#icon-email"></use>
                  </svg>
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
} 