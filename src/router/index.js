import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: { title: "Home" },
    },
    {
        path: "/about",
        name: "about",
        meta: { title: "About" },
        component: About,
    },
];

const router = new VueRouter({
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
});

const DEFAULT_TITLE = "Vadim Z";
router.afterEach((to) => {
    Vue.nextTick(() => {
        const title = to.meta.title;
        document.title = title
            ? `${to.meta.title} - ${DEFAULT_TITLE}`
            : DEFAULT_TITLE;
    });
});

export default router;
