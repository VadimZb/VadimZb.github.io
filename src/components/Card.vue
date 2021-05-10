<template>
    <v-card class="elevation-0 mx-auto transparent" max-width="1000">
        <v-img
            class="rounded-lg elevation-12"
            :lazy-src="project.image.lazy"
            :src="project.image.large"
        >
        </v-img>
        <div class="my-7">
            <v-card-title class="text-h3 justify-center">
                <span :class="titleStyle">&lt;</span>{{ project.title }}
                <span :class="titleStyle">/&gt;</span>
            </v-card-title>
            <LinksBtns class="my-5" :project="project" />
            <ToolsStack :stack="project.stack" />
        </div>

        <v-card-subtitle class="text-h5 text-center">{{
            project.description
        }}</v-card-subtitle>
    </v-card>
</template>

<script>
import ToolsStack from "@/components/ToolsStack";
import LinksBtns from "@/components/LinksBtns";
export default {
    components: {
        ToolsStack,
        LinksBtns,
    },
    props: {
        project: {
            type: Object,
        },
    },
    data() {
        return {
            titleStyle: "light-green--text font-weight-bold mx-2",
        };
    },
};
</script>

<style></style>
