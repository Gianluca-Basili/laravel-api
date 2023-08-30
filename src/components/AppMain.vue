<script>
import axios from 'axios';
export default {
    name: 'AppMain',
    data(){
      return{
            baseUrl: 'http://localhost:8000',
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
    </div>
</template>
<style lang="">
    
</style>