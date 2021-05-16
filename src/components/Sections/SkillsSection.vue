<template>
    <div>
        <div>
            <BracketsTitle>Skills</BracketsTitle>
        </div>
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
                                skillLevel[lang.skill]
                            }}</Accent>
                        </p>
                    </div>
                    <ToolsStack :cols="2" :stack="lang.skills" />
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import BracketsTitle from "@/components/BracketsTitle";
import ToolsStack from "@/components/ToolsStack";
import Accent from "@/components/Accent";
export default {
    components: {
        Accent,
        ToolsStack,
        BracketsTitle,
    },
    data() {
        return {
            tools: this.$store.state.tools,
            languages: this.$store.state.languages,
            skillLevel: {
                1: "Basic",
                2: "Medium",
                3: "Advanced",
            },
        };
    },
    methods: {
        sortBySkillLevel(a, b) {
            const _a = this.tools[a.name].skill;
            const _b = this.tools[b.name].skill;

            return _b - _a;
        },
    },
    created() {
        this.languages.sort(this.sortBySkillLevel);
    },
};
</script>

<style scoped>
.full-width {
    width: 100%;
}
</style>
