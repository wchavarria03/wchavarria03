import "./styles/main.css";
import { initializePortfolio, initializeScrollAnimations, initializeParticles, initializeTypingAnimation } from "./portfolio";

// Initialize the portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initializePortfolio()
  // Initialize animations after a short delay to ensure DOM is ready
  setTimeout(() => {
    initializeScrollAnimations()
    initializeParticles()
    initializeTypingAnimation()
  }, 100)
})

// Also initialize immediately in case DOM is already loaded
if (document.readyState === 'loading') {
  // Do nothing, event listener will handle it
} else {
  initializePortfolio()
  setTimeout(() => {
    initializeScrollAnimations()
    initializeParticles()
    initializeTypingAnimation()
  }, 100)
} 