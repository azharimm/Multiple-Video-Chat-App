import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Room from '../components/room/Room.vue'

Vue.use(Router)


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/room/:room',
        name: 'room',
        component: Room,
        props: true
    },
]

const router = new Router({
    mode: 'history',
    routes
})

export default router