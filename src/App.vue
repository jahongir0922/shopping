<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav id="navlink">
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'about' }">About</RouterLink>
      <RouterLink :to="{ name: 'contacts' }">Contacts</RouterLink>
      <RouterLink :to="{ name: 'news' }">News</RouterLink>
      <RouterLink :to="{ name: 'shopping' }">Shopping</RouterLink>
    </nav>
  </header>
  <body>
    <RouterView class="pad" />
  </body>
</template>

<style lang="scss" scoped>
#navlink {
  display: flex;
  gap: 20px;
  padding: 15px 120px;
  justify-content: end;
  box-shadow: 0 0 8px black;
  a {
    color: black;
    font-weight: 600;
    font-size: 1.2em;
    padding: 10px;
    border-radius: 5px;
    &:hover {
      background-color: aqua;
    }
    &:active {
      background-color: rgb(21, 153, 153);
    }
  }
}
.pad {
  // padding: 120px;
  // background-color: aqua;
}
</style>
