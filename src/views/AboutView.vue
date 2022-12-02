<script setup></script>
<template>
  <div id="about">
    <div id="aboutlink">
      <h1>this is about page</h1>
      <RouterLink :to="{ name: 'myself' }">About myself</RouterLink>
      <RouterLink :to="{ name: 'myfamily' }">About my family</RouterLink>
      <RouterLink :to="{ name: 'mycompany' }">About my company</RouterLink>
    </div>
    <div id="aboutview">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<style scoped lang="scss">
#about {
  display: grid;
  min-height: 600px;
  grid-template-columns: 30% 70%;
  #aboutlink {
    border: 1px solid red;
    display: flex;
    flex-direction: column;
  }
  #aboutview {
    border: 1px solid red;
  }
}
</style>