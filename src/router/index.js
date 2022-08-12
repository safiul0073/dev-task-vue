import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
        path: "/",
        name: "home",
        component: Home,
        meta: {
            enterClass: 'animate__animated animate__fadeInUp',
            leaveClass: 'animate__animated animate__fadeInDown',
        }
    }, {
        path: "/about",
        name: "about",
        component: About,
        meta: {
            enterClass: 'animate__animated animate__fadeInUp',
            leaveClass: 'animate__animated animate__fadeInDown',
        }
    }],
});

export default router;