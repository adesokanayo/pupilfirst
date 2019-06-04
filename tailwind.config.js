const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    colors: {
      ...defaultTheme.colors,
      primary: {
        100: '#F0EAFB',
        200: '#D3BFF3',
        300: '#B08EE6',
        400: '#976AE2',
        500: '#6025C0',
        600: '#4D1E9A',
        700: '#380D80',
        800: '#35156B',
        900: '#1F0D40',
      },
      secondary: {
        100: '#FEE6EF',
        200: '#FCB5D0',
        300: '#FF80B0',
        400: '#F95392',
        500: '#F61067',
        600: '#AC0645',
        700: '#A61149',
        800: '#7B0531',
        900: '#4A031E',
      },
    },
    extend: {
      spacing: {
        '7': '1.75rem',
        '9': '2.25rem',
        '11': '2.75rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '21': '5.25rem',
        '22': '5.5rem',
        '23': '5.75rem',
        '25': '6.25rem',
        '26': '6.5rem',
        '27': '6.75rem',
        '28': '7rem',
        '29': '7.25rem',
        '30': '7.5rem',
        '31': '7.75rem',
      }
    },
  }
}