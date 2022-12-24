const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{html,js,vue}',
    './components/**/*.{html,js,vue}',
    './layouts/**/*.{html,js,vue}',
    './content/**/*.{md,vue}'
  ],
  theme: {
    extend: {
      width: {
        '15': '3.75rem',
        '30': '7.5rem'
      },
      height: {
        '15': '3.75rem',
        '30': '7.5rem'
      },
      screens: {
        'short': { 'raw': '(max-height: 500px)' }
      },
      colors: {
        // bg: '#1e272e',
        bg: '#373838',
        yellowgreen: 'yellowgreen',
        primary: '#262626',
        accent: '#1ad691',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        successDark: '#3b8a3e',
        warning: '#FB8C00'
      },
      cursor: {
        none: 'none'
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        mono: ['Ubuntu Mono', ...defaultTheme.fontFamily.mono],
        book: ['Gentium Book Basic', 'serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
