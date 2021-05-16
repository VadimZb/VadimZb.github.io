<template>
    <h1 class="text-h2 text-center mb-10">
        <Accent>{</Accent> <slot></slot> <Accent>}</Accent>
    </h1>
</template>

<script>
import Accent from "@/components/Accent";
export default {
    components: {
        Accent,
    },
};
</script>
