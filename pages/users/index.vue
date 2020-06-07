<template>
  <div class="container">
    <div>
      <h1>Hello users</h1>

      <input type="text" v-model.lazy="id">
      <button v-on:click="ShowUser" type="submit">go to user profile</button>
    </div>

  </div>
</template>

<script>
    export default {
        data(){
          return {
            id : 0
          }
        },

      methods : {
          ShowUser(){
            this.$router.push(`/users/${this.id}`) ;
          }
      }
    }
</script>

<style scoped>

</style>
