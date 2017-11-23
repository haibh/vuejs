Vue.component('task', {
  data: function() {
    return {
      status: 'Criticals'
    }
  },
  template: `
    <p>Server status:{{status}}</p>
  `
});

new Vue ({
  el: '#app'
});