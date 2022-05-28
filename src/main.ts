import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store, { setupStore } from "./store"

import "./assets/css/index.css"

const app = createApp(App)

app.use(store)
setupStore()
app.use(router)
app.mount("#app")
