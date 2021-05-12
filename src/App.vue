<template>
    <v-app>
        <v-main>
            <transition name="fade" appear>
                <router-view />
            </transition>
        </v-main>
    </v-app>
</template>

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
