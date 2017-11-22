new Vue({
  el: '#app',
  data: {
    title: 'hello',
    link: 'https://google.com'
  },
  methods: {
    changeTitle: function (event) {
      this.title = event.target.value
    },

    sayHello: function () {
      return this.title
    }
  }
})
