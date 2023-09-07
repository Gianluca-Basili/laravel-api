import { createRouter, createWebHistory } from "vue-router";

import Homepage from './pages/Homepage.vue';
import PostList from './pages/PostList.vue';
import SinglePost from './pages/SinglePost.vue'
import CategoriesList from './pages/CategoriesList.vue';
import AboutUs from './pages/AboutUs.vue';
import ContactUs from './pages/ContactUs.vue';
import NotFound from './pages/NotFound.vue';





const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component: Homepage
        },
        {
            path:'/blog',
            name:'posts',
            component: PostList
        },
        {
            path:'/blog/:slug',
            name:'single-post',
            component: SinglePost
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
        {
            path:'/*',
            name:'Not-Found',
            component: NotFound
        },
        
    ]
});

export { router }
