<template>
  <div class="card bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header" >Post : {{post.id}}</div>
    <div class="card-body">
      <h5 class="card-title" v-text="post.title"></h5>
    </div>
    <nuxt-link :to="{ name : 'posts-id' , params : {id : post.id}}" class="btn btn-primary" >show post</nuxt-link>
  </div>
</template>

<script>
    export default {

      props : {
          post : Object
      }

    }
</script>

<style scoped>

</style>
