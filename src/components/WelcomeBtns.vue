<template>
    <div class="d-flex flex-column flex-md-row">
        <v-btn
            href="https://github.com/VadimZb"
            class="ma-3 white--text"
            color="blue-grey darken-2"
        >
            <v-icon left>mdi-github</v-icon>
            Github
        </v-btn>
        <v-btn
            class="ma-3 white--text"
            color="blue-grey darken-2"
            @click="scrollToProjects"
        >
            <v-icon left>mdi-xml</v-icon>
            Projects
        </v-btn>
        <v-btn
            @click="switchTheme"
            class="ma-3 white--text"
            color="blue-grey darken-2"
        >
            <v-icon left>{{ themeIcon }}</v-icon>
            Dark Theme: {{ themeTitle }}
        </v-btn>
    </div>
</template>

<script>
export default {
    methods: {
        scrollToProjects() {
            document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" });
        },
        switchTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        },
    },
    computed: {
        themeIcon() {
            return this.$vuetify.theme.dark
                ? "mdi-weather-night"
                : "mdi-weather-sunny";
        },
        themeTitle() {
            return this.$vuetify.theme.dark ? "On" : "Off";
        },
    },
};
</script>

<style></style>
