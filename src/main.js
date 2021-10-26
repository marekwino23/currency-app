import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import store from "./store";


createApp(App).use(router).use(VueSweetalert2).use(store).mount('#app')