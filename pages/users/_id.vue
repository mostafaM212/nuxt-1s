<template>
    <div>
      <h1>this is user's id : {{ id }}</h1>
    </div>
</template>

<script>
    export default {
        name: "_id",


      data(){
          return {
            id : this.$route.params.id
          }
      },

      validate(context){
          return /^\d+$/.test(context.params.id)
      }
    }
</script>

<style scoped>

</style>
