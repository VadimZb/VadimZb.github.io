<template>
    <v-row>
        <v-col
            v-for="(lang, i) in languages"
            :key="i"
            cols="12"
            md="6"
            class="d-flex align-center justify-center my-7"
        >
            <div
                class="d-flex flex-column justify-center align-center full-width"
            >
                <v-icon
                    class="mb-2"
                    x-large
                    :color="tools[lang.name].color"
                    v-text="tools[lang.name].icon"
                ></v-icon>
                <div class="d-flex flex-column justify-center align-center">
                    <p class="text-h4" v-text="lang.name"></p>
                    <p class="text-h6 font-weight-light">
                        Skill level:
                        <Accent class="font-weight-bold">{{
                            skillLevel[tools[lang.name].skill]
                        }}</Accent>
                    </p>
                </div>
                <ToolsStack :cols="2" :stack="lang.skills" />
            </div>
        </v-col>
    </v-row>
</template>

<script>
import ToolsStack from "@/components/ToolsStack";
import Accent from "@/components/Accent";
export default {
    components: {
        Accent,
        ToolsStack,
    },
    data() {
        return {
            tools: this.$store.state.tools,
            skillLevel: {
                1: "Basic",
                2: "Medium",
                3: "Advanced",
            },
            languages: [
                {
                    name: "Javascript",
                    skills: ["Node.js", "Vue.js", "GraphQL", "Vuetify"],
                },
                {
                    name: "Typescript",
                    skills: [],
                },
                {
                    name: "Python",
                    skills: ["Django", "Telegram Bots"],
                },
                {
                    name: "Elixir",
                    skills: [],
                },
            ],
        };
    },
};
</script>

<style scoped>
.full-width {
    width: 100%;
}
</style>
