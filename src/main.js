import { createApp } from 'vue'
import App from './App.vue'
import Add from "./components/Add"
import Delete from './components/Delete'
const app = createApp(App)
app.component('the-add', Add);
app.component('the-delete',Delete);
app.mount('#app')
