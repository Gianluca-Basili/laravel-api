import { createRouter, createWebHistory } from "vue-router";

import Homepage from './pages/Homepage.vue';
import PostList from './pages/PostList.vue';
import CategoriesList from './pages/CategoriesList.vue';


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
        {
            path:'/categories',
            name:'categories',
            component: CategoriesList
        },
        
    ]
});

export { router }
