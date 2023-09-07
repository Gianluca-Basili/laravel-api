<script>
import axios from 'axios';
import { store } from '../store';
import AppLoader from '../components/AppLoader.vue';
export default {
    name:'SinglePost',
    components: {
        AppLoader
    },
    data(){
        return{
            store,
            post:null
        }
    },
    
    created(){
        this.getSinglePost();
    },

    methods:{
        getSinglePost(){
            this.store.loading = true;
            axios.get(`${this.store.baseUrl}/api/posts/${this.$route.params.slug}`).then((response) => {
               if(response.data.success){
                    this.post = response.data.post;
                    this.store.loading = false
               }
               else{

               }
            })
        },
    }


}
</script>
<template lang="">
    <div>
        
    </div>
</template>
<style lang="">
    
</style>