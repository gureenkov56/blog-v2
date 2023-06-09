<template>
    <div>
        TEST
       >>> {{ data }} 
       {{ error }}
    </div>
</template>

<script lang=ts>
import { defineComponent, ref, onMounted } from 'vue'
import { useFetch } from 'nuxt/app';

export default defineComponent({
    name: 'Test',
    async setup() {
        const {data, error} = await useFetch('/api/test');

        console.log('data', data);
        console.log('err', error);

        return {
            data,
            error
        }
    }
})
</script>
