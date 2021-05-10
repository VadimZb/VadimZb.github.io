import Vue from "vue";
import Vuex from "vuex";
import projects from "../Projects.json";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        projects,
    },
    mutations: {},
    actions: {},
    modules: {},
});
