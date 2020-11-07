import { createApp } from 'vue';
// Import inter, because it's awesome :)
import 'fontsource-inter';
import './assets/styles/main.css';

import TikTakTu from './TikTakTu.vue';

// Create the app
const app = createApp(TikTakTu);

// Mount it (:
app.mount('#app');
