new Vue({
  el: '#app',
  data: {
    title: 'Hello World sadfasdfasd'
  },
  methods: {
    changeTitle: function (event) {
      this.title = event.target.value
    }
  }
})
