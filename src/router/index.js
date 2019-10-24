import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Room from '../components/room/Room.vue'
import store from '../store'

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
        props: true,
        beforeEnter: (to, from, next) => {
            if(!store.getters.getState.name){
                next({
                    name: 'home',
                    query: {
                        room: to.params.room
                    }
                })
            }
            next();
        }
    },
]

const router = new Router({
    mode: 'history',
    routes
})

export default router