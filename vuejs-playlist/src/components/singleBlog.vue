<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.body }}</article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // $route is because we have vue-router installed
      id: this.$route.params.id,
      blog: {}
    }
  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id)
      .then(function(data){
        this.blog = data.body
      })
  }
}
</script>

<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
</style>