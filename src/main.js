import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import './assets/main.css'

// import styles
import './assets/css/bootstrap.css'
import './assets/css/custom.css'
import './assets/css/flickity.css'
import './assets/css/iconsmind.css'
import './assets/css/jquery.steps.css'
import './assets/css/lightbox.min.css'
import './assets/css/socicon.css'
import './assets/css/stack-interface.css'
import './assets/css/theme-red.css'
// import './assets/css/theme.css'
// import './assets/css/main.css'

// import font
import './assets/fonts/iconsmind.eot'
import './assets/fonts/iconsmind.ttf'
import './assets/fonts/iconsmind.woff'
import './assets/fonts/socicon.eot'
import './assets/fonts/socicon.svg'
import './assets/fonts/socicon.ttf'
import './assets/fonts/socicon.woff'
import './assets/fonts/stack-interface.eot'
import './assets/fonts/stack-interface.svg'
import './assets/fonts/stack-interface.ttf'
import './assets/fonts/stack-interface.woff'
import './assets/fonts/stack-interface.woff2'

createApp(App).use(router).mount('#app')
