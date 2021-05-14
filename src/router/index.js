import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: { title: "Home" },
    },
    {
        path: "/skills",
        name: "Skills",
        meta: { title: "Skills" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Skills.vue"),
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
        document.title = `${to.meta.title} - ${DEFAULT_TITLE}` || DEFAULT_TITLE;
    });
});

export default router;
