import { createRouter, createWebHistory } from "vue-router";

import Homepage from './pages/Homepage.vue';
import PostList from './pages/PostList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component: Homepage
        },
        {
            path:'/posts',
            name:'posts',
            component: PostList
        },
        
    ]
});

export { router }
