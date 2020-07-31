<template>
  <!-- column is an argument -->
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <div v-for="blog in blogs" v-bind:key="blog.id" class="single-blog">
      <!-- to-uppercase if the name of the filter, defined in main.js as a global filter -->
      <!-- it is possible to add multiple filter on the same element -->
      <h2 v-rainbow>{{ blog.title | to-uppercase}}</h2>
      <article>{{ blog.body | snippet}}</article>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blogs: [],
      wide: '',
      narrow: ''
    }
  },
  created() {
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
      this.blogs = data.body.slice(0,10);
    });
  }
}
</script>

<style>
#show-blogs{
  max-width: 800px;
  margin: 0px auto;
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>