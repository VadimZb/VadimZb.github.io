<template>
    <v-container
        fill-height
        fluid
        class="d-flex flex-column justify-center align-center full-view"
    >
        <div class="text-h2 my-10">
            <div class="text-center text-md-left text-h4 text-md-h2">
                Hello<Accent>,</Accent>
                I<Accent>'</Accent>m
            </div>
            <div class="d-flex d-md-none align-center justify-center">
                <span class="font-weight-bold">Vadim Z<Accent>.</Accent></span>
            </div>
            <div class="d-none d-md-flex align-center">
                <Tag tag="bold">
                    <span class="font-weight-bold">
                        Vadim Zbaraschchenko
                    </span>
                </Tag>
            </div>

            <div class="text-md-right text-center text-h5 text-md-h2">
                <span>a Web Developer</span>
            </div>
        </div>
        <WelcomeBtns />
    </v-container>
</template>

<script>
import Tag from "@/components/Tag";
import Accent from "@/components/Accent";
import WelcomeBtns from "@/components/WelcomeBtns";
export default {
    components: {
        Tag,
        WelcomeBtns,
        Accent,
    },
};
</script>

<style>
.full-view {
    height: 100vh;
}
</style>
