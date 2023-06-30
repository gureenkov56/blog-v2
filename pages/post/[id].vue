<template>
    <div>
        <template v-if="post">
            <h1>{{ post.titleIcon }} {{ post.title }}</h1>
            
            <div v-html="post.content" />       
        </template>

        <div v-else>
            Пост не найден
        </div>
    </div>
</template>

<script lang="ts">
import { useFetch } from 'nuxt/app'
import { useRoute } from '~/.nuxt/vue-router'
import { defineComponent } from 'vue'
import { Post, PostRaw } from '~/handlers/Post'

export default defineComponent({
    name: 'PostId',
    async setup() {
        const route = useRoute()
        const id = route.params.id 
        const { data: postRaw } = await useFetch<PostRaw>('/api/post', {
            method: 'POST',
            body: { id }
        })

        let post: Post | null = null;
        
        if (postRaw.value) {
            post = new Post(postRaw.value)
        }

        return {
            post,
        }

    }
})
</script>