import './assets/main.css'

import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import NavBar from './components/NavBar.vue'

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)

app.component('NavBar', NavBar)

app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
