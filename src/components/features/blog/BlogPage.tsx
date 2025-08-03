import { portfolioData } from "../../../data/api";

export class BlogPage {
  static render(): string {
    const getReadingTime = (summary: string) => {
      const words = summary.split(' ').length;
      const readingTime = Math.ceil(words / 200); // Average reading speed
      return `${readingTime} min read`;
    };

    const getTopicColor = (title: string) => {
      if (title.toLowerCase().includes('ai') || title.toLowerCase().includes('software')) return 'ai';
      if (title.toLowerCase().includes('css') || title.toLowerCase().includes('web')) return 'web3';
      if (title.toLowerCase().includes('go') || title.toLowerCase().includes('development')) return 'experience';
      return 'primary';
    };

    return `
      <section class="page blog-page-modern">
        <div class="space-background"></div>
        <div class="container">
          <h2 class="section-title animate-on-scroll fade-up">Knowledge Sharing</h2>
          <p class="blog-subtitle animate-on-scroll fade-up stagger-1">Insights from the world of modern development</p>
          
          <div class="blog-grid-modern">
            ${portfolioData.blog.map((post, index) => {
              const colorClass = getTopicColor(post.title);
              const readingTime = getReadingTime(post.summary);
              
              return `
                <article class="blog-card-modern animate-on-scroll fade-up stagger-${index + 1}">
                  <div class="blog-card-header">
                    <div class="blog-meta">
                      <div class="blog-pulse ${colorClass}"></div>
                      <span class="blog-date">${post.date}</span>
                    </div>
                    <div class="blog-reading-time">
                      <span>${readingTime}</span>
                    </div>
                  </div>
                  
                  <div class="blog-content-modern">
                    <h3 class="blog-title-modern">${post.title}</h3>
                    <p class="blog-summary-modern">${post.summary}</p>
                  </div>
                  
                  <div class="blog-footer">
                    <div class="blog-tags">
                      <div class="blog-tag ${colorClass}">
                        ${post.title.includes('AI') ? 'AI/ML' : 
                          post.title.includes('CSS') ? 'Frontend' : 
                          post.title.includes('Go') ? 'Backend' : 'Development'}
                      </div>
                    </div>
                    ${post.url !== '#' ? `
                      <a href="${post.url}" target="_blank" rel="noopener" class="blog-read-btn">
                        <span>Read Article</span>
                        <div class="btn-arrow">→</div>
                      </a>
                    ` : `
                      <div class="blog-coming-soon">
                        <span>Coming Soon</span>
                      </div>
                    `}
                  </div>
                </article>
              `;
            }).join('')}
          </div>
        </div>
      </section>
    `;
  }
} 