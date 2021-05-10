<template>
    <v-container fluid>
        <div v-for="(project, i) in projects" :key="i">
            <Card :project="project" class="custom-margin" />
        </div>
    </v-container>
</template>

<script>
import Card from "@/components/Card";
export default {
    name: "Home",

    components: {
        Card,
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
