import {createApp} from 'vue'
import App from './App.vue'
import {setupStore} from './store/store'
import "normalize.css"


const app = createApp(App)
app.mount('#app')

app.use(setupStore())