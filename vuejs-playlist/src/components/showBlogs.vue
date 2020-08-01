<template>
  <!-- column is an argument -->
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Serarch blogs" />
    <!-- we will replace blogs in v-for with the computed property: filteredBlogs -->
    <!-- initially filteredBlogs is looking for an empty string, retreiving all blog posts -->
    <div v-for="blog in filteredBlogs" v-bind:key="blog.id" class="single-blog">
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
      narrow: '',
      search: ''
    }
  },
  created() {
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
      this.blogs = data.body.slice(0,10);
    });
  },
  // used for search filter
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter((blog) => {
        return blog.title.toLowerCase().match(this.search.toLowerCase())
      })
    }
  },
  // Local filter
  filters: {
    'to-uppercase': function(value){
      return value.toUpperCase()
    },
    // we can write the above filter as
    // toUppercase(value){
      // return value.toUpperCase()
    //}
    'snippet': function(value){
      return value.slice(0,100) + '...'
    }
  },
  directives: {
    'rainbow': {
      bind(el, binding, vnode){
        el.style.color = "#" + Math.random().toString(16).slice(2,8)
      }
    }
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