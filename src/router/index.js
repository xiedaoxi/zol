import Vue from 'vue'
import Router from 'vue-router'
import vue1 from '@/components/vue1'					//关键字引入
import vue2 from '../components/vue2.vue'			//路径引入
import vue3 from '@/components/vue3'
import vue4 from '@/components/vue4'
import child1 from '@/components/child1'
import child2 from '@/components/child2';
import child3 from '@/components/child3';
import child4 from '@/components/child4';
import child5 from '@/components/child5';
import child6 from '@/components/child6';
import child7 from '@/components/child7';
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',name: 'vue1',component: vue1},
    { path: '/B2',name: 'vue2',component: vue2,
     children:[
     {path: '/',name: 'child1',component: child1}, 
     {path: '/a1',name: 'child1',component: child1,},
     {path: '/a2',name: 'child2',component: child2,}, 
     {path: '/a3',name: 'child3',component: child3,},
     {path: '/a4',name: 'child4',component: child4,}, 
     {path: '/a5',name: 'child5',component: child5,},
     {path: '/a6',name: 'child6',component: child6,},
     {path: '/a7',name: 'child7',component: child7,},
     ]
   },
   {path:'/B3',component:vue3},
   {path:'/B4',component:vue4},  
  ]
})
