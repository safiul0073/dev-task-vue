import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../views/Home/Index.vue'
import About from '../views/About.vue'
import Investment from '../views/Investment.vue'
import CashFlow from '../views/CashFlow.vue'
import Assets from '../views/Home/Asset.vue'
import Combo from '../views/Home/Combo.vue'
import Equity from '../views/Home/Equity.vue'
import Liability from '../views/Home/Liability.vue'
import Home from '../views/Home/Home.vue'
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
        children: [{
                path: "/dashboard/assets",
                name: "assets",
                component: Assets,
            }, {
                path: "/dashboard/combo",
                name: "combo",
                component: Combo,
            },
            {
                path: "/dashboard/liabilities",
                name: "liability",
                component: Liability,
            },
            {
                path: "/dashboard/equity",
                name: "equity",
                component: Equity,
            }, {
                path: "/dashboard",
                name: "home",
                component: Home,
            }
        ]
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