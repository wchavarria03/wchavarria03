export default {
  plugins: {
    'postcss-preset-env': {
      features: {
        'nesting-rules': true,
      },
    },
    autoprefixer: {
      grid: true,
    },
  },
} 