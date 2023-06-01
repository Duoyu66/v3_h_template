import {createRouter,createWebHistory} from 'vue-router'

const  routes=[
    {
        path:'/',
        name:'home',
        component:()=>import('../pages/home/index.vue')
    },
    {
        path:'/hello',
        name:'hello',
        component:()=>import('../components/HelloWorld.vue')
    },{
    path:'/tourism',
        name:'tourism',
        component:()=>import('../pages/tourism/index.vue')
    },
    {
        path:'/message',
        name:'message',
        component:()=>import('../pages/message/index.vue')
    }


]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router