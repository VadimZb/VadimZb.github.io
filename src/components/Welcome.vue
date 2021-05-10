<template>
    <v-container
        fill-height
        fluid
        class="d-flex flex-column justify-center align-center full-view"
    >
        <div class="text-h2 my-10">
            <div class="text-left">
                Hello<span class="light-green--text">,</span> I<span
                    class="light-green--text"
                    >'</span
                >m
            </div>
            <div class="d-flex align-center">
                <HtmlBrackets tag="bold" /><span class="font-weight-bold"
                    >Vadim Zbaraschchenko</span
                ><HtmlBrackets tag="bold" closing />
            </div>
            <div class="text-right">
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
