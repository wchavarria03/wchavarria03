import { portfolioData } from "../../../data/api";

export class AboutPage {
  static render(): string {
    return `
      <section class="page about-page">
        <div class="container about-container">
        <div class="about-content">
          <h2 class="section-title animate-on-scroll fade-up">About Me</h2>
          
          <div class="about-intro animate-on-scroll fade-up stagger-1">
            <p class="about-bio">${portfolioData.bio}</p>
          </div>

          <div class="about-details animate-on-scroll fade-up stagger-2">
            ${portfolioData.aboutDetails.map(detail => `<p>${detail}</p>`).join('')}
          </div>

          <div class="about-highlights animate-on-scroll fade-up stagger-3">
            <h3 class="about-subtitle">Key Highlights</h3>
            <div class="highlights-grid">
              <div class="highlight-item">
                <div class="highlight-icon">🚀</div>
                <div class="highlight-content">
                  <h4>Staff Engineer</h4>
                  <p>Leading multi-team initiatives and technical strategy</p>
                </div>
              </div>
              <div class="highlight-item">
                <div class="highlight-icon">🤖</div>
                <div class="highlight-content">
                  <h4>AI/ML Specialist</h4>
                  <p>Expertise in NLP, LLMs, and intelligent automation</p>
                </div>
              </div>
              <div class="highlight-item">
                <div class="highlight-icon">🎓</div>
                <div class="highlight-content">
                  <h4>Teaching & Mentoring</h4>
                  <p>Passionate about sharing knowledge and developing others</p>
                </div>
              </div>
              <div class="highlight-item">
                <div class="highlight-icon">⏰</div>
                <div class="highlight-content">
                  <h4>9+ Years Experience</h4>
                  <p>Extensive experience in full-stack development</p>
                </div>
              </div>
              <div class="highlight-item">
                <div class="highlight-icon">🏆</div>
                <div class="highlight-content">
                  <h4>Certified in AI</h4>
                  <p>Professional certifications in AI and machine learning</p>
                </div>
              </div>
              <div class="highlight-item">
                <div class="highlight-icon">🚴</div>
                <div class="highlight-content">
                  <h4>Active Lifestyle</h4>
                  <p>Cycling and working out at the gym to stay healthy and clear my mind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    `
  }
} 