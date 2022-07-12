import { createApp } from "vue"
import App from "./App.vue"

// import './registerServiceWorker'
import "./assets/tailwind.css"

// router
import router from "./router"

// smooth scroll
import VueSmoothScroll from "vue3-smooth-scroll"

// axios
import axios from "axios"
import VueAxios from "vue-axios"

// create app
createApp(App)
  .use(router)
  .use(VueSmoothScroll)
  .use(VueAxios, axios)
  .mount("#app")
