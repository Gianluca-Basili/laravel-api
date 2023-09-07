import { createRouter, createWebHistory } from "vue-router";

import Homepage from './pages/Homepage.vue';
import PostList from './pages/PostList.vue';
import CategoriesList from './pages/CategoriesList.vue';
import AboutUs from './pages/AboutUs.vue';
import ContactUs from './pages/ContactUs.vue';



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
        {
            path:'/AboutUs',
            name:'AboutUs',
            component: AboutUs
        },
        {
            path:'/ContactUs',
            name:'ContactUs',
            component: ContactUs
        },
        
    ]
});

export { router }
