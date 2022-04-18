import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAGl6DxLbXKpbGUy7v6mzM6p0Oxr9PvBl4',

  authDomain: 'jobbanel.firebaseapp.com',

  projectId: 'jobbanel',

  storageBucket: 'jobbanel.appspot.com',

  messagingSenderId: '191744621640',

  appId: '1:191744621640:web:4b7da77672514b40542c7d',
};

initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app');
