import { defineConfig } from 'vite'
import { compression } from 'vite-plugin-compression2'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/wchavarria03/' : '/',
  plugins: [
    compression({
      include: [/\.(js|mjs|json|css|html|svg)$/],
      threshold: 1024, // Only compress files > 1KB
      algorithms: ['brotli', 'gzip'], // Support both compression types
      deleteOriginalAssets: false // Keep original files for browsers that don't support compression
    })
  ],
  css: {
    postcss: './postcss.config.js',
    devSourcemap: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          // Removed React chunks since this is not a React project
        },
      },
    },
    // Enable minification and tree-shaking
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Cache assets
    assetsInlineLimit: 4096, // Inline assets < 4KB
    sourcemap: false, // Disable sourcemaps in production
  }
}) 