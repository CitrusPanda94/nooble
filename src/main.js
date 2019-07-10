import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';

import Home from './components/home/Home.vue';



//Tj
import Tj from './components/tj/Tj.vue';
import TjDesigners from './components/tj/designers/TjDesigners.vue';
import TjProjects from './components/tj/projects/TjProjects.vue';


Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
 
  //Tj's Routes
  { path: '/tj', component: Tj },
  { path: '/designers', component: TjDesigners },
  { path: '/projects', component: TjProjects, name: 'projects', props: true  },
 
  
];

const router = new VueRouter({
  routes,
  mode: 'history'
});
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
