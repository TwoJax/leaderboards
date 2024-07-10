/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['index.html', 'src/**/*.{js,ts,vue}'],

  theme: {
    extend: {
      colors: {
        biscuit: '#fff6eb',
        'bits-blue': '#3b66bc',
        'bits-blue-100': '#ffc0d0ed',
        cloud: '#fffefb',
        'intrepid-blue': '#1a285f',
        'iron-ore': '#303136'
      },

      fontFamily: {
        sans: ['Public Sans', ...defaultTheme.fontFamily.sans]
      }
    }
  },

  plugins: []
}
