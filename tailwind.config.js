const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        sm: 'var(--body-sm)',
        base: 'var(--body-md)',
        lg: 'var(--body-lg)',
      },
      fontFamily: {
        'onest-black': ['Onest Black', ...fontFamily.sans],
        'onest-extrabold': ['Onest Extra Bold', ...fontFamily.sans],
        'onest-bold': ['Onest Bold', ...fontFamily.sans],
        'onest-regular': ['Onest Regular', ...fontFamily.sans],
        'onest-medium': ['Onest Medium', ...fontFamily.sans],
        'onest-light': ['Onest Light', ...fontFamily.sans],
        'onest-thin': ['Onest Thin', ...fontFamily.sans],
      },
      borderRadius: {
        md: 'var(--rounded)'
      },
      colors: {
        // Primary
        primary: 'var(--primary)',
        // Secondary
        secondary: {
          yellow: 'var(--secondary-yellow)',
          blue: 'var(--secondary-blue)',
          purple: 'var(--secondary-purple)',
          red: 'var(--secondary-red)',
          green: 'var(--secondary-green)',
        },
        // Neutral colors
        neutral: {
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          300: 'var(--neutral-300)',
          400: 'var(--neutral-400)',
          500: 'var(--neutral-500)',
          600: 'var(--neutral-600)',
          700: 'var(--neutral-700)',
          800: 'var(--neutral-800)',
        },
        // System colors
        blue: {
          100: 'var(--blue-100)',
          200: 'var(--blue-200)',
          300: 'var(--blue-300)',
          400: 'var(--blue-400)',
        },
        green: {
          100: 'var(--green-100)',
          200: 'var(--green-200)',
          300: 'var(--green-300)',
          400: 'var(--green-400)',
        },
        red: {
          100: 'var(--red-100)',
          200: 'var(--red-200)',
          300: 'var(--red-300)',
          400: 'var(--red-400)',
        },
        orange: {
          100: 'var(--orange-100)',
          200: 'var(--orange-200)',
          300: 'var(--orange-300)',
          400: 'var(--orange-400)',
        },
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
