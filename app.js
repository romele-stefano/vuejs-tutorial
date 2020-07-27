new Vue({
  el:'#vue-app',
  data: {
    name: 'Stefano',
    job: 'Full stack Dev'
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ' ' + this.name
    }
  }
})
