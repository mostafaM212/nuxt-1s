<template>
    <div class="container">
      <h1 v-text="post.title"></h1>
      <pre>{{post.body}}</pre>

      <nuxt-link to="/posts" class="btn btn-danger">Back</nuxt-link>
    </div>
</template>

<script>


  import axiox from 'axios';
    export default {
        data(){
          return {
            post : {}
          }
        },


     async asyncData(context){
        let response = await axiox.get('https://jsonplaceholder.typicode.com/posts/'+ context.params.id)

       return {
          post :response.data
       }
      },
      head() {
          return {
            title : this.post.title
          }
      }
    }
</script>

<style scoped>

</style>
