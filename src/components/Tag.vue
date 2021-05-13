<template>
    <span class="d-flex align-center">
        <span :class="color" class="text-h4 font-weight-bold my-0 mx-2">
            &lt;{{ tag }}&gt;
        </span>
        <slot></slot>
        <span :class="color" class="text-h4 font-weight-bold my-0 mx-2">
            &lt;/{{ tag }}&gt;
        </span>
    </span>
</template>

<script>
export default {
    props: {
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
