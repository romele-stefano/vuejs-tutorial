<template>
  <div id="add-blog">
    <h2>Add a new blog post</h2>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <!-- input biding with v-model -->
      <!-- .lazy is a modifier that will show the preview only when we click outside our input field -->
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label>Ninjas</label>
        <!-- if we click a checkbox, the value will be attached to blog.categoires -->
        <input type="checkbox" value="ninjas" v-model="blog.categories" />
        <label>Wizards</label>
        <input type="checkbox" value="wizards" v-model="blog.categories" />
        <label>Monk</label>
        <input type="checkbox" value="monk" v-model="blog.categories" />
        <label>Warrior</label>
        <input type="checkbox" value="warrior" v-model="blog.categories" />
      </div>
      <label>Author:</label>
      <!-- attach v-model directive to the select tag -->
      <select v-model="blog.author">
        <option v-for="author in authors" v-bind:key="author">{{ author }}</option>
      </select>
      <!-- prevent the default behaviour -->
      <button v-on:click.prevent="post">Add blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
    </div>
    <br>
    <div id="preview">
      <h3>Preview Blog:</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Author: {{blog.author }}</p>
      <p>Blog content:</p>
      <p> {{ blog.content }}</p>
      <p>Blog categories:</p>
      <ul>
        <li v-for="category in blog.categories" v-bind:key="category">{{ category }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      blog: {
        title: '',
        content: '',
        categories:[],
        author: ''
      },
      authors: ['Mario', 'Luigi', 'Bowser'],
      submitted: false
    }
  },
  methods: {
    post: function(){
      // return a Promise
      this.$http.post('https://jsonplaceholder.typicode.com/posts', {
        title: this.blog.title,
        body: this.blog.content,
        userId: 1
      }).then(function(data){
        console.log(data)
        this.submitted = true
      })
    }
  }
}
</script>

<style>
#add-blog *{
  box-sizing: border-box;
}

#add-blog {
  margin: 20px auto;
  max-width: 500px;
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type="text"], textarea {
  display: block;
  width: 100%;
  padding: 8px;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3 {
  margin-top: 10px;
}

#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label {
  display: inline-block;
}

</style>