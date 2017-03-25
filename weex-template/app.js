import Home from './src/home.vue'
import Begin from './src/begin.vue'
import NotFound from './src/not-found.vue'
//foo.el = '#root'
//export default new Vue(foo);
//const NotFound = { template: '<p>Page not found</p>' }
//const Home = { template: '<p>home page</p>' }
//const About = { template: '<p>about page</p>' }
const routes = {
  '/weex.html': Home,
  '/': Home,
  '/begin': Begin
}

export default new Vue({
  el: '#root',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})

