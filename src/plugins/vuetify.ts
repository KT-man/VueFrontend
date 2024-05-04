import { createVuetify, type ThemeDefinition } from 'vuetify'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const customTheme: ThemeDefinition = {
  colors: {
    primary: '#335C81',
    surface: '#FCF7F8',
    secondary: '#78CDD7',
    info: '#274060',
    warning: '#1B2845'
  }
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme
    }
  }
})
