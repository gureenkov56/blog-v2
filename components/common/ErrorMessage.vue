<template>
    <div class="error">
        <div class="text">
            {{ text }}
        </div>
        <div>
            {{ icon }}
        </div>
    </div>
</template>

<script lang=ts>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ErrorMessage',
    props: {
        text: {
            type: String,
            default: 'Что-то пошло не так...'
        },
        icon: {
            type: String,
            default: '🤔'
        },
    }
})
</script>

<style>
.error {
    text-align: center;
    font-size: 20px;
}
</style>