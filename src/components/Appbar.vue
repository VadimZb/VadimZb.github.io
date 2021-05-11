<template>
    <v-app-bar fixed elevation="0" color="transparent">
        <v-spacer></v-spacer>
        <v-btn :to="btn.path">
            <v-icon>{{ btn.icon }}</v-icon>
            {{ btn.title }}
        </v-btn>
        <v-spacer></v-spacer>
    </v-app-bar>
</template>

<script>
export default {
    data() {
        return {
            btn: {
                title: "Back",
                icon: "mdi-arrow-left",
                path: "/",
            },
        };
    },
};
</script>

<style></style>
