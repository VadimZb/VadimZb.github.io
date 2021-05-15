<template>
    <div>
        <Welcome />
        <v-container fluid id="projects">
            <div v-if="$vuetify.breakpoint.mobile">
                <div v-for="(project, i) in projects" :key="i">
                    <Card :project="project" class="custom-margin" />
                </div>
            </div>
            <v-timeline dense v-else>
                <v-timeline-item
                    icon="mdi-xml"
                    large
                    color="accent"
                    v-for="(project, i) in projects"
                    :key="i"
                >
                    <Card :project="project" class="custom-margin" />
                </v-timeline-item>
            </v-timeline>
        </v-container>
    </div>
</template>

<script>
import Card from "@/components/Card";
import Welcome from "@/components/Welcome";
export default {
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
    margin: 7rem 0;
}
</style>
