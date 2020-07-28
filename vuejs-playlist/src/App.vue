<template>
  <div>
    <h1>{{ title }}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
import Ninjas from './Ninjas.vue'

export default {
  data () {
    return {
      title: 'Ninja app'
    }
  },
  components: {
    'ninjas': Ninjas
  }
}
</script>

<style>
h1 {
  color: purple;
}
</style>
