<template>
    <NuxtLink
        to="/"
        class="logo"
    >
        GUREENKOV56
    </NuxtLink>
</template>

<script lang=ts>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Logo',
})
</script>

<style>
.logo {
    display: block;
            font-family: 'Bebas Neue', sans-serif;
}
</style>