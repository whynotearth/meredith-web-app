<template>
  <section class="container">
    <h1>Why Not Earth?</h1>
     <nuxt-link to="meredith">
       Meredith
     </nuxt-link>
    <nuxt-link to="rehash-trash">
      Rehash Trash
    </nuxt-link>
  </section>
</template>

<script>
export default {
}
</script>

<style lange="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
h1 {
  font-size: 3em;
  margin: 1em;
}

h2 {
  font-weight: 200;
}
</style>
