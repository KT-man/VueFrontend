import { createVuetify, type ThemeDefinition } from 'vuetify'

const customBlueTheme: ThemeDefinition = {
  colors: {
    background: '#FCF7F8',
    surface: '#78CDD7',
    primary: '#335C81',
    'dark-1': '#274060',
    'dark-2': '#1B2845'
  }
}

export default createVuetify({
  theme: {
    themes: { customBlueTheme }
  },
  display: {}
})
