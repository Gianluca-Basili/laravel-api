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
            loading: true,
            maxNumCharacters: 250
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
        },

        truncateText(text){
            if(text.length > this.maxNumCharacters ){
                return text.substr(0,this.maxNumCharacters) + '...';
            }
            
            return text;
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
                <div class="col-12 col-md-4 mt-5" v-for="post in posts" :key="post.id">
                    <div class="card min-height-200">
                        <div class="card-header">
                            {{post.title}}

                        </div>
                        <div class="card-image-top">
                            <img :src="`${baseUrl}/storage/${post.cover_image}`" class="img-fluid">
                        </div>
                        <div class="card-body">
                            <p>
                                <span v-if="post.category">{{post.category.name}}</span>
                                <span v-else>Categoria non assegnata</span>
                            </p>
                            <p v-if="post.tags">
                                <span class="badge text-bg-primary me-3" v-for="tag in post.tags" :key="tag.id">{{tag.name}}</span>
                            </p>
                            <p>{{truncateText(post.content)}}</p>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="btn btn-sm btn-primary">Leggi l'articolo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .min-height-200{
        min-height: 200px;
    }
</style>