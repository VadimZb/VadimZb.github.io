<template>
    <v-container
        class="d-flex flex-column justify-center align-center max-height"
    >
        <v-btn class="my-10 white--text" elevation="7" color="accentBg" to="/">
            <v-icon left>mdi-keyboard-backspace</v-icon>
            Back
        </v-btn>
        <div>
            <h1 class="text-h2 text-center mb-10">
                <Accent>{</Accent> Skills <Accent>}</Accent>
            </h1>
        </div>
        <div>
            <Skills />
        </div>
    </v-container>
</template>

<script>
import Skills from "@/components/Skills";
import Accent from "@/components/Accent";
export default {
    name: "About",

    components: {
        Accent,
        Skills,
    },
    data() {
        return {
            age: 17,
        };
    },
};
</script>

<style scoped>
.max-height {
    height: 100%;
}
</style>
