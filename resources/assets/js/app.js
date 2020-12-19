
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import { Form, HasError, AlertError } from 'vform'
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
//router
import VueRouter from 'vue-router'

//components
Vue.component('example', require('./components/Example.vue'))
Vue.component('Profile', require('./components/Profile.vue'))
Vue.component('Dashboard', require('./components/Dashboard.vue'))
Vue.component('Users', require('./components/Users.vue'))
Vue.component('Form', require('./components/Form.vue'))


Vue.use(VueRouter)
let routes = [
    { path: '/profile', component: require('./components/Profile.vue') },
    { path: '/dashboard', component: require('./components/Dashboard.vue') },
    { path: '/users', component: require('./components/Users.vue') },
  ]
  const router = new VueRouter({
    routes // short for `routes: routes`
    ,mode:'history'
  })
//router

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */




const app = new Vue({
    el: '#app',
    router//router
});
