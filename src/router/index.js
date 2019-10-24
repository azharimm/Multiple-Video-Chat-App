import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/Home'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    }
]

const router = new Router({
    mode: 'history',
    routes
})

export default router