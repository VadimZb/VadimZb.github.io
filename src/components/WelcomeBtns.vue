<template>
    <div class="d-flex flex-column flex-md-row flex-wrap">
        <v-btn
            :elevation="elevation"
            href="https://github.com/VadimZb"
            :class="btnClass"
            :color="color"
            target="_blank"
        >
            <v-icon left>mdi-github</v-icon>
            Github
        </v-btn>
        <v-btn
            :elevation="elevation"
            :class="btnClass"
            to="/about"
            :color="color"
        >
            <v-icon left>mdi-code-json</v-icon>
            Skills
        </v-btn>
        <v-btn
            :elevation="elevation"
            :class="btnClass"
            :color="color"
            @click="scrollToProjects"
        >
            <v-icon left>mdi-xml</v-icon>
            Projects
        </v-btn>
        <v-btn
            :elevation="elevation"
            @click="switchTheme"
            :class="btnClass"
            :color="color"
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
    data() {
        return {
            elevation: 24,
            btnClass: "ma-3 white--text",
            color: "accentBg",
        };
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
