import Vue from "vue";
import Vuex from "vuex";

// JSON data
import projects from "../Data/Projects.json";
import tools from "../Data/Tools.json";
import languages from "../Data/Languages.json";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        projects,
        tools,
        languages,
    },
    mutations: {},
    actions: {},
    modules: {},
});
