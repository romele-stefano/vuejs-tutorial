new Vue({
  el:'#vue-app',
  data: {
    age: 29,
    x: 0,
    y: 0
  },
  methods: {
    add: function(inc){
      this.age += inc
    },
    subtract: function(dec){
      this.age -= dec
    },
    // we automatically get event when there is an event, we do not need to pass it into html
    updateXY: function(event){
      // console.log(event)
      this.x = event.offsetX
      this.y = event.offsetY
    },
    click: function(){
      alert('You clicked me')
    }
  }
})
