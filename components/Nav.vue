<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Nuxt App </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <nuxt-link class="nav-item nav-link active" to="/">Home </nuxt-link>
        <nuxt-link class="nav-item nav-link active" to="/users">Users </nuxt-link>
        <nuxt-link class="nav-item nav-link active" to="/posts">Posts </nuxt-link>

      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style scoped>

</style>
