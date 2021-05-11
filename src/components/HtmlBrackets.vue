<template>
    <p :class="color" class="text-h4 font-weight-bold my-0 mx-2">
        &lt;<span v-if="closing">/</span>{{ tag }}&gt;
    </p>
</template>

<script>
export default {
    props: {
        closing: {
            type: Boolean,
            default: false,
        },
        tag: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            color: "accent--text",
        };
    },
};
</script>
