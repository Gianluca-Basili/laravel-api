<script>
export default {
    name:"AppHeader",
    data(){
        return{
                menuItems:[
                    {
                        label:"home",
                        routeName:'home'
                    },
                    {
                        label:"Chi siamo",
                        routeName: 'AboutUs'
                    },
                    {
                        label:"Articoli",
                        routeName: 'posts'
                    },
                    {
                        label:"Categorie",
                        routeName: 'categories'
                    },
                    {
                        label:"Contatti",
                        routeName:'ContactUs'
                    },
                ]
        }
    }
}
</script>
<template lang="">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img :src="logo" alt="" class="img-fluid">
        </a>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
                    <router-link class="nav-link " :to="{name:item.routeName}">{{item.label}}</router-link>
                </li>
                
            </ul>
       
        </div>
    </div>
</nav>
</template>
<style lang="">
    
</style>