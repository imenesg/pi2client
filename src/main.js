import  'bootstrap/dist/css/bootstrap.css'
import './assets/main.css'
import './assets/base.css'
import { createApp} from 'vue'
import App from './App.vue'
import { initializeApp } from "firebase/app";

const ENV = import.meta.env
const firebaseConfig = {
    apiKey: ENV.VITE_APIKEY,
    authDomain: ENV.VITE_AUTHDOMAIN,
    projectId: ENV.VITE_PROJECTID,
    storageBucket: ENV.VITE_STORAGEBUCKET,
    messagingSenderId: ENV.VITE_MESSAGINGSENDERID,
    appId: ENV.VITE_APPID
};
// Initialize Firebase
initializeApp(firebaseConfig);

import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
import  'bootstrap/dist/js/bootstrap.js'
