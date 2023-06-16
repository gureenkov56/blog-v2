<template>
    <div class="main">
        <NuxtLink
            v-for="{id, icon, h1, description} in posts"
            :key="id"
            :to="'/post/' + id"
            class="post"
        >
            <div class="post__icon">
                {{ icon }}
            </div>
            <div>
                <h3>{{ h1 }}</h3>
                <div class="post__description">
                    {{ description }}
                </div>
            </div>
        </NuxtLink>
        <Test />
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Index',
    setup() {
        const posts = [
            {
                id: 1,
                icon: '🎁',
                h1: 'Подарки - новый взгляд',
                description:
                    'В этом году я впервые ставил цели публично и вот что из этого вышло',
            },
            {
                id: 2,
                icon: '✅',
                h1: '2022 Итоги',
                description:
                    'В этом году я впервые ставил цели публично и вот что из этого вышло',
            },
            {
                id: 3,
                icon: '🧘‍♂️',
                h1: 'Что, где и зачем? Короче, Випассана',
                description:
                    'В этом году я впервые ставил цели публично и вот что из этого вышло',
            },
            {
                id: 4,
                icon: '🌏',
                h1: 'Автостопом до Малайзии или что делать после армии. Part 1',
                description:
                    'В этом году я впервые ставил цели публично и вот что из этого вышло',
            },
        ];

        return {
            posts,
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
