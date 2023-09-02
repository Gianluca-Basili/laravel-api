<script>
import { store }  from '../store.js';
import axios from 'axios';

import AppLoader from '../components/AppLoader.vue';

export default {
    name:"CategoriesList",
    components:{
        AppLoader
    },
    data(){
        return{
            store,
            categories:[],
        }
    },
    created(){
        this.getCategories();
    },
    methods:{
        getCategories(){
            axios.get(`${this.store.baseUrl}/api/categories`).then((response)=>{
                this.store.loading = true ;
                if(response.data.success){
                    this.categories = response.data.results
                    this.store.loading = false
                }
            })
        }
    }
}
</script>
<template lang="">
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">Categorie</h1>
                </div>

            </div>
        </div>
        <AppLoder v-if="store.loading"/>
        <div class="container mt-5" v-else>
            <div class="row">
                <div class="col-12 col-md-2" v-for="category in categories" :key="category.id">
                    <div class="card my-5">
                        <div class="card-body">
                            <div class="card-title ">
                                {{category.name}}
                            </div>
                        </div>
                        <div class="card-footer">
                            <a href="/" class="btn btn-sm btn-primary">Dettaglio Categoria</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>