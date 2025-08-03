import { portfolioData } from "../../../data/api";

export class SkillsPage {
  static render(): string {
    const getColorClass = (index: number) => {
      const colors = ['primary', 'ai', 'web3', 'mentor', 'experience', 'certified'];
      return colors[index % colors.length];
    };

    const renderSkillCategory = (skillCategory: any, index: number) => {
      return `
        <div class="skill-category-card animate-on-scroll fade-up stagger-${index + 1}">
          <div class="skill-category-header">
            <div class="skill-pulse ${getColorClass(index)}"></div>
            <h3 class="skill-category-title">${skillCategory.title}</h3>
          </div>
          <div class="skills-grid-modern">
            ${skillCategory.skills.map((skill: any, skillIndex: number) => `
              <div class="skill-chip animate-on-scroll scale-in stagger-${skillIndex + 1}">
                <div class="skill-chip-inner">
                  <span class="skill-name">${skill.name}</span>
                  <div class="skill-indicator ${getColorClass(index)}"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    };

    return `
      <section class="page skills-page-modern">
        <div class="container">
          <h2 class="section-title animate-on-scroll fade-up">Skills & Technologies</h2>
          <p class="skills-subtitle animate-on-scroll fade-up stagger-1">Building the future with modern technologies</p>
          
          <div class="skills-categories-grid">
            ${portfolioData.skills.map((skillCategory, index) => renderSkillCategory(skillCategory, index)).join('')}
          </div>
        </div>
      </section>
    `
  }
} 