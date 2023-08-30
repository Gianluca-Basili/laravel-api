<script>
import AppLoader from './AppLoader.vue';
import axios from 'axios';
export default {
    name: 'AppMain',
    components:{
        AppLoader
    },
    data(){
      return{
            baseUrl:'http://localhost:8000',
            posts: [],
            loading: true
      }
    },
    created(){
        this.getPosts();
    },
    methods:{
        getPosts(){
            this.loading = true;
            axios.get( `${this.baseUrl}/api/posts`).then((response)=>{
                
                if(response.data.success){
                    this.posts = response.data.results;
                    this.loading = false;

                }

                else{

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
                    <h1 class="text-center">Boolpress</h1>
                </div>
            </div>
        </div>
        <AppLoader v-if="loading" />
        <div v-else class="container">
            <div class="row">
                <div class="col-12" v-for="post in posts" :key="post.id">
                        {{post.title}}
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>