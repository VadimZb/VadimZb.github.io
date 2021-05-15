import Vue from "vue";
import Vuex from "vuex";
import projects from "../Data/Projects.json";
import tools from "../Data/Tools.json";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        projects,
        tools,
    },
    mutations: {},
    actions: {},
    modules: {},
});
