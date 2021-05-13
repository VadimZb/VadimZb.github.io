<template>
    <v-card class="elevation-0 mx-auto transparent" max-width="1000">
        <v-img
            class="rounded-lg elevation-12"
            :lazy-src="project.image.lazy"
            :src="project.image.large"
        >
            <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular
                        indeterminate
                        color="accent"
                    ></v-progress-circular>
                </v-row>
            </template>
        </v-img>
        <div class="my-7">
            <v-card-title
                class="text-h3 justify-center font-weight-light"
                v-text="project.title"
            ></v-card-title>
            <LinksBtns class="my-5" :project="project" />
            <ToolsStack :stack="project.stack" />
        </div>

        <v-card-subtitle
            class="text-h5 text-center"
            v-text="project.description"
        ></v-card-subtitle>
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
};
</script>
