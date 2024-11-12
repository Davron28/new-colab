import {createRouter, createWebHashHistory} from "vue-router";
import Home from '@/pages/Home.vue'
import CurrentClean from '@/pages/CurrentClean.vue'
const routers = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/clean', name: 'clean', component: () => import("@/pages/Clean.vue")},
        { path: '/gases', name: 'gases', component: () => import("@/pages/Gases.vue")},
        { path: '/info', name: 'info', component: () => import("@/pages/Info.vue")},
        { path: "/clean/:id", name: "currentClean", component: () => import("@/pages/CurrentClean.vue")},
        { path: "/gases/:id", name: "currentGases", component: () => import("@/pages/CurrentGases.vue")},
    ]
})
export default routers