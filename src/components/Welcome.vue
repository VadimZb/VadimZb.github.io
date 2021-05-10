<template>
    <v-container
        fill-height
        fluid
        class="d-flex flex-column justify-center align-center full-view"
    >
        <div class="text-h2 my-10">
            <div class="text-center text-md-left text-h4 text-md-h2">
                Hello<span class="light-green--text">,</span> I<span
                    class="light-green--text"
                    >'</span
                >m
            </div>
            <div class="d-flex d-md-none align-center justify-center">
                <span class="font-weight-bold">Vadim Z.</span>
            </div>
            <div class="d-none d-md-flex align-center">
                <HtmlBrackets tag="bold" /><span class="font-weight-bold"
                    >Vadim Zbaraschchenko</span
                ><HtmlBrackets tag="bold" closing />
            </div>

            <div class="text-md-right text-center text-h5 text-md-h2">
                <span>a Web Developer</span>
            </div>
        </div>
        <WelcomeBtns />
    </v-container>
</template>

<script>
import HtmlBrackets from "@/components/HtmlBrackets";
import WelcomeBtns from "@/components/WelcomeBtns";
export default {
    components: {
        HtmlBrackets,
        WelcomeBtns,
    },
};
</script>

<style>
.full-view {
    height: 100vh;
}
</style>
