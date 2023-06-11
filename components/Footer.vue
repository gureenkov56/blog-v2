<template>
    <footer>
        <div class="desc">
            <span>Показалось, что какой-то сюжет про вас? </span>
            <span>Не стоит себе льстить.</span><br />
            <span>Все персонажи выдуманы, совпадения случайны.</span>
        </div>
        <CommonLogo />
        <CommonLinksInstagram />
    </footer>
</template>

<script lang=ts>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Footer',
})
</script>

<style lang="scss" scoped>
footer {
    text-align: center;
    padding: 20px;

    > * {
        margin: 8px 0;
    }

    .desc {
        font-family: 'Roboto', sans-serif;
        font-size: 11px;
        color: #B2B2B2;

        span: {
            white-space: nowrap;
        }
    }
}
::v-deep .logo {
    color: #C4C4C4;
}
::v-deep .instagram-icon {
    width: 20px;
}


</style>