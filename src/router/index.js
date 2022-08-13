import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Investment from '../views/Investment.vue'
import CashFlow from '../views/CashFlow.vue'
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
        path: "/",
        name: "home",
        component: Home,
    }, {
        path: "/about",
        name: "about",
        component: About,
    }, {
        path: "/cash-flow",
        name: "cash-flow",
        component: CashFlow
    }, {
        path: "/investment",
        name: "investment",
        component: Investment
    }],
});

export default router;