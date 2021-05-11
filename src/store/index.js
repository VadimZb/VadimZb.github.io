import Vue from "vue";
import Vuex from "vuex";
import projects from "../Projects.json";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        projects,
        tools: {
            "Node.js": {
                icon: "mdi-nodejs",
                color: "light-green darken-2",
                description:
                    "Platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications",
            },
            "Vue.js": {
                icon: "mdi-vuejs",
                color: "green lighten-1",
                description:
                    "Progressive framework for JavaScript used to build web interfaces and one-page applications.",
            },
            Vuetify: {
                icon: "mdi-vuetify",
                color: "light-blue lighten-3",
            },
            SVG: {
                icon: "mdi-svg",
                color: "yellow darken-4",
            },
            JSON: {
                icon: "mdi-cloud-braces",
                color: "deep-orange darken-1",
            },
            Bootstrap: {
                icon: "mdi-bootstrap",
                color: "purple darken-4",
            },
            GraphQL: {
                icon: "mdi-graphql",
                color: "pink lighten-1",
                description:
                    "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.",
            },
            API: {
                icon: "mdi-api",
                color: "light-blue darken-4",
            },
            "Telegram Bots": {
                icon: "mdi-robot",
                color: "blue-grey",
            },
            Django: {
                icon: "mdi-alpha-j-box",
                color: "green darken-4",
            },
            Typescript: {
                icon: "mdi-language-typescript",
                color: "light-blue darken-4",
                knowledge: "40%",
            },
            Javascript: {
                icon: "mdi-language-javascript",
                color: "yellow darken-1",
                knowledge: "90%",
            },
            Python: {
                icon: "mdi-language-python",
                color: "light-blue darken-3",
                knowledge: "85%",
            },
            Elixir: {
                icon: "mdi-water",
                color: "deep-purple",
                knowledge: "20%",
            },
        },
    },
    mutations: {},
    actions: {},
    modules: {},
});
