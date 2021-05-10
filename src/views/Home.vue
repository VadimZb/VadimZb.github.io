<template>
    <div>
        <Welcome />
        <v-container fluid id="projects">
            <div v-for="(project, i) in projects" :key="i">
                <Card :project="project" class="custom-margin" />
            </div>
        </v-container>
    </div>
</template>

<script>
import Card from "@/components/Card";
import Welcome from "@/components/Welcome";
export default {
    name: "Home",

    components: {
        Card,
        Welcome,
    },
    data() {
        return {
            projects: this.$store.state.projects.projects,
        };
    },
};
</script>

<style scoped>
.custom-margin {
    margin: 10rem 0;
}
</style>
