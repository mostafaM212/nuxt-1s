<template>
    <div class="container">
      <div>
        <h2>making api request - the vue way</h2>
      </div>
      <div class="container row ">
        <app-card class="ml-auto mr-auto" v-for="(post ,index) in posts" v-bind:post="post" :key="index"></app-card>

      </div>
      <button class="btm btn-danger" v-scroll-to="'body'">Back to Top</button>

    </div>
</template>

<script>

  import axios from 'axios'
  import {mapGetters} from 'vuex'
  import Card from "../../components/Card";
  import {createStore} from "../../.nuxt/store";

  export default {

    data(){
      return {
        allPosts : ''
      }
    },
    async  fetch(context){

      let response = await axios.get('https://jsonplaceholder.typicode.com/posts') ;

      context.store.dispatch('setPosts' , response.data)
      // return {
      //   allPosts : response.data
      // }
    },

    computed : {
      ...mapGetters(['posts'])
      // allPosts(){
      //
      //   return this.$store.getters.posts
      // }

    },



    head : {
      title : 'learning/posts'
    },

    components :{
      'app-card': Card
    }
  }
</script>
<style scoped>

</style>
