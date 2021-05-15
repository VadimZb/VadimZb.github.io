<template>
    <v-app>
        <v-main>
            <transition name="fade" appear>
                <router-view />
            </transition>
        </v-main>
    </v-app>
</template>

<script>
export default {
    created() {
        const hours = new Date().getHours();
        // Between 11 pm - 5 am
        this.$vuetify.theme.dark = 23 <= hours || hours <= 5;
    },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
