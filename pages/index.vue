<template>
    <div class="main">
        <CommonErrorMessage v-if="error" />
        <CommonErrorMessage
            v-if="noPosts"
            text="Постов не найдено"
            icon="😶"
        />
        <NuxtLink
            v-for="{id, titleIcon, title, description} in posts"
            :key="id"
            :to="'/post/' + id"
            class="post"
        >
            <div class="post__icon">
                {{ titleIcon || "💡" }}
            </div>
            <div>
                <h3>{{ title }}</h3>
                <div class="post__description">
                    {{ description }}
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useFetch } from 'nuxt/app';
import { Post } from '~/handlers/Post';

export default defineComponent({
    name: 'Index',
    async setup() {
        const {data, error} = await useFetch('/api/posts');

        const posts = computed(() => {
            if(data.value) {
                return data.value.map((postRaw) => new Post(postRaw))
            }

            return []
        })

        const noPosts = !posts.value.length;

        return {
            posts,
            data,
            error,
            noPosts,
        };
    },
});
</script>

<style lang="scss">
.main {
  width: 100%;
  .post {
    display: flex;
    gap: 10px;
    margin-top: 30px;
    &__icon,
    h3 {
      font-size: 20px;
      font-family: "Montserrat", sans-serif;
    }
    &__description {
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      color: #595B5B;
      max-width: 300px;
      margin-top: 8px;
    }
  }
}

</style>
