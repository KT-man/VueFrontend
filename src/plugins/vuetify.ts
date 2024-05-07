import { createVuetify, type ThemeDefinition } from 'vuetify'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const customTheme: ThemeDefinition = {
  colors: {
    primary: '#335C81',
    'surface-light': '#FAFFFD',
    'surface-dark': '#EDF5F7',
    secondary: '#D4FBFF',
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
