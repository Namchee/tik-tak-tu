import { createApp } from 'vue';
// Import inter, because it's awesome :)
import 'fontsource-inter';
import './assets/styles/main.css';

import TikTakTu from './TikTakTu.vue';
import router from './router';

// Create the app
const app = createApp(TikTakTu);

// Use the router
app.use(router);

// Mount it (:
app.mount('#app');
