<template>
    <header>
        <div class="wrapper">
            <CommonLogo />
        </div>
    </header>
</template>

<script lang=ts>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HeaderPart',
})
</script>

<style lang="scss">
header {
    .wrapper {
        max-width: 500px;
        margin: 0 auto;
        padding: 0 20px;
        display: flex;

        .logo {
            font-size: 25px;
            margin: 25px 0;
        }
    }
}
</style>