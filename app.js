new Vue({
  el:'#vue-app',
  data: {
    name: 'Stefano',
    job: 'Full stack Dev',
    website: 'https://github.com/romele-stefano',
    websiteTag: '<a href="https://github.com/romele-stefano">Another way to show Github link</a>'
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ' ' + this.name
    }
  }
})
