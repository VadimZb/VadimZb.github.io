<template>
    <span :class="color">
        <slot></slot>
    </span>
</template>

<script>
export default {
    data() {
        return {
            color: "accent--text",
        };
    },
};
</script>
