<template>
    <v-container
        class="d-flex flex-column justify-center align-center max-height"
    >
        <v-btn
            class="my-10 white--text"
            elevation="7"
            color="accentBg"
            :to="{ name: 'home' }"
        >
            <v-icon left>mdi-keyboard-backspace</v-icon>
            Back
        </v-btn>
        <AboutSection class="custom-margin" />
        <SkillsSection class="custom-margin" />
    </v-container>
</template>

<script>
import AboutSection from "@/components/Sections/AboutSection";
import SkillsSection from "@/components/Sections/SkillsSection";
export default {
    components: {
        SkillsSection,
        AboutSection,
    },
};
</script>

<style scoped>
.max-height {
    height: 100%;
}

.custom-margin:not(:last-child) {
    margin-bottom: 10rem;
}
</style>
