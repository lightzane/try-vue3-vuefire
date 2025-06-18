import { createApp } from 'vue';
import { VueFire, VueFireAuth } from 'vuefire';
import App from './App.vue';
import { firebaseApp } from '@/firebase';
import router from '@/router';

// Vuetify
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
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
    VueFireAuth(), // https://vuefire.vuejs.org/guide/auth.html
    // * Also, setup your "Sign-in" method in Firebase
    // * See: https://firebase.google.com/docs/auth/web/password-auth
    // In project: https://console.firebase.google.com/project/try-vue3-vuefire/authentication/providers
  ],
});

app.mount('#app');
