module.exports = {
    prefix: '',
    purge: {
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {
        tableLayout: ['hover', 'focus'],
      },
    },
    plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};