<template>
    <v-item-group>
        <v-container>
            <v-row class="justify-center">
                <v-col
                    class="mx-3 mx-md-0"
                    cols="1"
                    v-for="(item, i) in stack"
                    :key="i"
                >
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-item class="d-flex flex-column">
                                <v-icon
                                    class="resize-on-hover"
                                    v-bind="attrs"
                                    v-on="on"
                                    x-large
                                    :color="info[item].color"
                                    >{{ info[item].icon }}</v-icon
                                >
                            </v-item>
                        </template>
                        <span>{{ item }}</span>
                    </v-tooltip>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
</template>

<script>
export default {
    props: {
        stack: {
            type: Array,
        },
    },
    data() {
        return {
            info: {
                "Node.js": {
                    icon: "mdi-nodejs",
                    color: "light-green darken-2",
                },
                "Vue.js": {
                    icon: "mdi-vuejs",
                    color: "green lighten-1",
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
                },
                API: {
                    icon: "mdi-api",
                    color: "light-blue darken-4",
                },
            },
        };
    },
};
</script>

<style scoped>
.resize-on-hover {
    transition: 0.4s;
}

.resize-on-hover:hover {
    transform: scale(1.3);
}
</style>
