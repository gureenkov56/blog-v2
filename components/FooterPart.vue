<template>
    <footer>
        <CommonLogo />
        <CommonLinksInstagram />
        <div class="desc">
            <span>Показалось, что какой-то сюжет про вас? </span>
            <span>Не стоит себе льстить.</span><br>
            <span>Все персонажи выдуманы, совпадения случайны.</span>
        </div>
    </footer>
</template>

<script lang=ts>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'FooterPart',
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

    :deep(.logo) {
        color: #C4C4C4;
    }

    :deep(.instagram-icon) {
        width: 20px;
    }
}



</style>