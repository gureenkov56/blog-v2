<template>
    <div>
        TEST connection: {{ connection }}
    </div>
</template>

<script lang=ts>
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
    name: 'Test',
    setup() {
        const connection = ref<string>('NO CONNECTION');

        onMounted(() => {
            console.log('mounted');
            fetch('/api/test')
                .then(res => res.json())
                .then(res => connection.value = res.message)
        })

        return {
            connection
        }
    }
})
</script>
