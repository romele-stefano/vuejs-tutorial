// import components
import showBlogs from './components/showBlogs.vue'
import addBlog from './components/addBlog.vue'

export default [
  { path: '/', component: showBlogs },
  { path: '/add', component: addBlog },
  // if path does not exist
  { path: '*', redirect: '/'}
]