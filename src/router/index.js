import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Skills from "../views/Skills.vue";

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
        component: Skills,
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
