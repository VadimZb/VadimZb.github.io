<template>
    <div class="d-flex justify-center">
        <v-btn
            elevation="12"
            v-for="(btn, i) in buttons"
            :key="i"
            :class="btn.class"
            :href="btn.url"
            :color="btn.color"
        >
            <v-icon left>{{ btn.icon }}</v-icon>
            {{ btn.title }}
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
    computed: {
        buttons() {
            return [
                {
                    title: "Github",
                    color: "blue-grey darken-2",
                    url: this.project.repo,
                    class: "mx-3 white--text",
                    icon: "mdi-github",
                },
                {
                    title: "Open",
                    color: "primary",
                    url: this.project.url,
                    class: "mx-3",
                    icon: "mdi-open-in-new",
                },
            ];
        },
    },
};
</script>
