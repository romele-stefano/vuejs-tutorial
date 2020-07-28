<template>
  <footer>
    <p>{{ copyright }} {{ title }}</p>
  </footer>
</template>

<script>
import { bus } from '../main.js'

export default {
  data () {
    return {
      copyright: 'Copyright 2020'
    }
  },
  props: {
    title: {
      type: String
    }
  },
  created() {
    // set event listener with a callback function
    // here data refres to this.title in Header.vue that we pass to the event
    bus.$on('titleChanged', (data) => {
      this.title = data
    })
  }
}
</script>

<style scoped>
footer {
  background: #222;
  padding: 6px;
}

p {
  color: lightgreen;
  text-align: center;
}
</style>
