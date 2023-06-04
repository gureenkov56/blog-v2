<template>
    <div>
        TEST
        <!-- <ul> -->
            <!-- <li 
            v-for="post in posts"
            :key="post.title"
            >
                {{ post.title }}
            </li>
        </ul>
        {{ data }} -->
    </div>
</template>

<script lang=ts>
import { defineComponent, ref, onMounted } from 'vue'
import { useFetch } from 'nuxt/app';

export default defineComponent({
    name: 'Test',
    async setup() {

        const {data} = await useFetch('/api/test');
        console.log('data', data);

        // return {
        //     posts
        // }
    }
})
</script>
