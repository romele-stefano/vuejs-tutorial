<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
import { bus } from '../main.js'

export default {
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String
    }
  },
  methods: {
    changeTitle: function() {
      // emit event on the bus
      this.title = 'Vue Wizards'
      bus.$emit('titleChanged', this.title)
    }
  }
}
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}

h1 {
  color: #222;
  text-align: center;
}
</style>
