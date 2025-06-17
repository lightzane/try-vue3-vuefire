import { createApp } from 'vue';
import { VueFire } from 'vuefire';
import App from './App.vue';
import { firebaseApp } from '@/firebase';
import router from '@/router';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(vuetify);
app.use(router);

// https://vuefire.vuejs.org/guide/getting-started.html#Setup
app.use(VueFire, {
  firebaseApp,
  modules: [
    // we will see other modules later on (i.e. VueFireAuth)
  ],
});

app.mount('#app');
