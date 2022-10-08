import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue"
import experiences from "../pages/experiences.vue"
import portfolio from "../pages/portfolio.vue"
import about from "../pages/about.vue"
import contact from "../pages/contact.vue"

const routes = [{
    path: "/",
    component: Home,
    name: "Home",
},{
    path: "/Experiences",
    component: experiences,
    name: "experiences",
},{
    path: "/portfolio",
    component: portfolio,
    name: "portfolio",
},{
    path: "/about",
    component: about,
    name: "about",
},{
    path: "/contact",
    component: contact,
    name: "contact",
}]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "active",
    scrollBehavior(to, from, savedPosition) {
       if (to.hash) {
            return {
                selector: to.hash,
                 behavior: 'smooth'
             };
        }
    return { x: 0, y: 0 }; // Go to the top of the page if no hash
    },
    routes,
});

export default router;