import { createApp } from 'vue';

import App from './App.vue';
import FriendContacts from './components/FriendContacts.vue';
import AddContacts from './components/AddContacts.vue';
const app=createApp(App);
app.component('friend-contact',FriendContacts);
app.component('add-contact',AddContacts);
app.mount('#app');
