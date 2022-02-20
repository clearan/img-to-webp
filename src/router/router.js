import Vue from 'vue'
import Router from 'vue-router'
// import b from '@/view/b'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/a',
            name: 'a',
            component:() => import('@/view/a')
        },
        {
            path: '/b',
            name: 'b',
            // component:b
            component:() => import('@/view/b')
        }
    ]
})
