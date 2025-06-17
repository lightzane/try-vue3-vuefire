import './assets/main.css';

import { createApp } from 'vue';
import { VueFire } from 'vuefire';
import App from './App.vue';
import { firebaseApp } from '@/firebase';

const app = createApp(App);

// https://vuefire.vuejs.org/guide/getting-started.html#Setup
app.use(VueFire, {
  firebaseApp,
  modules: [
    // we will see other modules later on (i.e. VueFireAuth)
  ],
});

app.mount('#app');
