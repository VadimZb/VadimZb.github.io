<template>
    <v-item-group>
        <v-container>
            <v-row class="justify-center">
                <v-col cols="1" v-for="(item, i) in stack" :key="i">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-item class="d-flex flex-column">
                                <v-icon
                                    v-bind="attrs"
                                    v-on="on"
                                    x-large
                                    :color="item.color"
                                    >{{ item.icon }}</v-icon
                                >
                            </v-item>
                        </template>
                        <span>{{ item.title }}</span>
                    </v-tooltip>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
</template>

<script>
export default {
    props: {
        stack: {
            type: Array,
        },
    },
};
</script>

<style></style>
