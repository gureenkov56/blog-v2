<template>
    <div class="app">
        <HeaderPart />
        <div class="content">
            <NuxtPage class="content__inner" />
        </div>
        <FooterPart />
    </div>
</template>

<script>
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300&family=Roboto:wght@300&display=swap');

// font-family: 'Bebas Neue', sans-serif;
// font-family: 'Montserrat', sans-serif;
// font-family: 'Roboto', sans-serif;
* {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color:  inherit;
  }

  .content {
    width: 100%;
    flex: 1;


    &__inner {
      max-width: 500px;
      margin: 0 auto;
      padding: 0 20px;
    }

    h1 {
      font-family: 'Montserrat', sans-serif;
    }

    p {
      margin-top: 1rem;
      font-size: 1.2rem;
    }
  }
}
</style>
