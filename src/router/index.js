import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/views/layout/Index.vue'
// 懒加载组件
const Login = () => import('@/views/login/index.vue')
const Home = () => import('@/views/home/Home.vue')
const Video = () => import('@/views/video/Video.vue')
const Question = () => import('@/views/question/Question.vue')
const My = () => import('@/views/my/My.vue')
const Search = () => import('@/views/Search/')
const Article = () => import('@/views/Article/index.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: layout,
    redirect: '/home',
    children:
      [
        { path: 'home', component: Home },
        { path: 'video', component: Video },
        { path: 'question', component: Question },
        { path: 'my', component: My }]
  },
  { path: '/Login', component: Login },
  { path: '/search', component: Search },
  {
    path: '/article/:article_id',
    component: Article,
    name: 'article',
    props: true// 让路由和组件解耦
  }
]

const router = new VueRouter({
  routes
})

export default router
