/**
 * Calculate years of experience since 2014
 * @returns {number} Number of years of experience
 */
export function getYearsOfExperience(): number {
  const startYear = 2014;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
}

/**
 * Get formatted experience string
 * @returns {string} Formatted experience string like "10+ Years"
 */
export function getExperienceString(): string {
  const years = getYearsOfExperience();
  return `${years}+ Years`;
}

/**
 * Get bio text with dynamic experience calculation
 * @returns {string} Bio text with current years of experience
 */
export function getBioWithExperience(): string {
  const years = getYearsOfExperience();
  return `Experienced Staff Engineer with over ${years} years of software development experience, specializing in full-stack development, AI/ML technologies, and leading multi-team initiatives. Passionate about teaching and sharing knowledge with others.`;
} 