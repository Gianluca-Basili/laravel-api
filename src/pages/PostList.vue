<script>
import axios from 'axios';
import { store }  from '../store.js';
import AppLoader from '../components/AppLoader.vue';
import PostCard from '../components/PostCard.vue';
export default {
    name: 'PostList',
    components:{
        AppLoader,
        PostCard
    },
    data(){
      return{
            store,
            posts: [],
           
            
            currentPage: 1,
            lastPage: null
      }
    },
    created(){
        this.getPosts(1);
    },
    methods:{
        getPosts(num_page){
            this.store.loading = true;
           

            axios.get(`${store.baseUrl}/api/posts`, {params: {page: num_page}}).then((response) =>{
                this.posts = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;

                this.store.loading = false;
                
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
        <AppLoader v-if="store.loading" />
        <div v-else class="container">
            <div class="row">
                <div class="col-12 col-md-4 mt-5" v-for="post in posts" :key="post.id">
                    <PostCard :post="post" />
                    <div class="card min-height-200">
                        <div class="card-header">
                            {{post.title}}

                        </div>
                        <div class="card-image-top">
                            <img :src="`${baseUrl}/storage/${post.cover_image}`" class="img-fluid">
                        </div>
                        <div class="card-body">
                            <p>
                                <span v-if="post.category"><strong><em>{{post.category.name}}</em></strong></span>
                                <span v-else><strong><em>Categoria non assegnata</em></strong></span>
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
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-center">
                        <nav>
                            <ul>
                                <div class="pagination">
                                    <li :class="currentPage === 1 ? 'disabled' : ''">
                                        <button class="page-link" @click="getPosts(currentPage - 1 )">Precedente</button>
                                    </li>
                                    <li :class="currentPage === lastPage ?'disabled' : ''">
                                        <button class="page-link" @click="getPosts(currentPage + 1)">Successivo</button>
                                        
                                    </li>

                                </div>
                            </ul>
                        </nav>
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