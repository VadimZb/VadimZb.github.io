<template>
    <v-container>
        <v-row class="justify-center align-center">
            <v-col
                class="mx-3 mx-md-0 d-flex justify-center align-center"
                :cols="cols"
                v-for="(item, i) in stack"
                :key="i"
            >
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon
                            class="resize-on-hover"
                            v-bind="attrs"
                            v-on="on"
                            x-large
                            :color="tools[item].color"
                            >{{ tools[item].icon }}</v-icon
                        >
                    </template>
                    <span>{{ item }}</span>
                </v-tooltip>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props: {
        stack: {
            type: Array,
        },
        cols: {
            type: Number,
            default: 1,
        },
    },
    data() {
        return {
            tools: this.$store.state.tools,
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
