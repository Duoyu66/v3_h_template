import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
const app = createApp(App);
import router from  './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Elicons from "@element-plus/icons-vue";
for (const name in Elicons) {
    app.component(name, Elicons[name]);
}

//pinia
import {createPinia} from "pinia";
const pinia = createPinia();
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
