import { errorTracking } from './error-tracking';

// Cache for sprite sheet loading status
let spriteSheetLoaded = false;

// Load sprite sheet once
async function loadSpriteSheet(): Promise<void> {
  if (spriteSheetLoaded) return;
  
  try {
    // Try without base path first (for development)
    let response = await fetch('/assets/icons/sprite.svg');
    
    // If that fails, try with base path (for production)
    if (!response.ok) {
      response = await fetch('/wchavarria03/assets/icons/sprite.svg');
    }
    
    if (!response.ok) {
      throw new Error('Failed to load sprite sheet');
    }
    
    const svgContent = await response.text();
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = svgContent;
    document.body.appendChild(tempDiv.firstElementChild!);
    spriteSheetLoaded = true;
  } catch (error) {
    errorTracking.track('SPRITE_SHEET_LOAD_ERROR', 'Error loading sprite sheet', {
      error: error instanceof Error ? error.message : String(error)
    });
  }
}

// Get icon from sprite sheet
export async function loadIcon(iconName: string, size: number = 20): Promise<string> {
  try {
    await loadSpriteSheet();
    
    return `<svg width="${size}" height="${size}">
      <use href="#icon-${iconName.replace('.svg', '')}" />
    </svg>`;
  } catch (error) {
    errorTracking.track('ICON_LOAD_ERROR', `Failed to load icon: ${iconName}`, {
      iconName,
      size,
      error: error instanceof Error ? error.message : String(error)
    });
    
    // Return fallback icon
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor">
      <rect width="24" height="24" fill="currentColor" opacity="0.3"/>
    </svg>`;
  }
}

// Sync version for initial render
export function getIconSVG(iconName: string, size: number = 20): string {
  try {
    return `<svg width="${size}" height="${size}">
      <use href="#icon-${iconName.replace('.svg', '')}" />
    </svg>`;
  } catch (error) {
    errorTracking.track('ICON_SYNC_ERROR', `Failed to get icon SVG: ${iconName}`, {
      iconName,
      size,
      error: error instanceof Error ? error.message : String(error)
    });
    
    // Return fallback icon
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor">
      <rect width="24" height="24" fill="currentColor" opacity="0.3"/>
    </svg>`;
  }
} 