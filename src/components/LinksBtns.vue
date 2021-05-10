<template>
    <div class="d-flex justify-center">
        <v-btn
            elevation="12"
            class="mx-3 white--text"
            :href="project.repo"
            color="blue-grey darken-2"
        >
            <v-icon left>mdi-github</v-icon>
            Github
        </v-btn>
        <v-btn elevation="12" class="mx-3" :href="project.url" color="primary">
            <v-icon left>mdi-open-in-new</v-icon>
            Open
        </v-btn>
    </div>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
        },
    },
};
</script>
