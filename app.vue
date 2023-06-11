<template>
  <div class="app">
    <Header />
    <NuxtPage class="content"/>
    <Footer />
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
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
  }

  a {
    text-decoration: none;
    color:  inherit;
  }
}
</style>
