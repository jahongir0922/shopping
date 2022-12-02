<script setup>
import { ref } from "vue";
import Card from "../components/Card.vue";
const baza = ref([
  {
    nomi: "skateboard",
    rasm: "/src/assets/images/products/skateboard electric.png",
    yulduzchalar: 3,
    narx: "35.5",
    idraqami: "skeyt51215wa",
    sotuvdami: false,
  },
  {
    nomi: "watch",
    rasm: "/src/assets/images/products/smart watch band pink.png",
    yulduzchalar: 2,
    narx: "41.5",
    idraqami: "watch5fsdevcds5515wa",
    sotuvdami: true,
  },
  {
    nomi: "sneaker",
    rasm: "/src/assets/images/products/sneaker black.png",
    yulduzchalar: 2,
    narx: "15.5",
    idraqami: "sneaker5121115515wa",
    sotuvdami: true,
  },
]);
</script>
<template>
  <div id="shopping">
    <div id="shop">
      <h1>SHOP</h1>
    </div>
    <div id="sort">
      <li>Showing all 10 results</li>
      <select name="products" id="products">
        <option selected disabled value="fd">choice one</option>
        <option value="popularity">Sort by popularity</option>
        <option value="priceup">Sort by price up</option>
        <option value="pricedown">Sort by price down</option>
      </select>
    </div>
    <div id="catalog">
      <Card v-for="(item, index) in baza" :key="index" :jonatma="item"></Card>
    </div>
    <div id="footer">
      <span>2022 year copirights all right reserved</span>
    </div>
  </div>
</template>
<style scoped lang="scss">
// @import "@/assets/_breakpoints.scss";
#shopping {
  #shop {
    padding: 20px 120px;
  }
  #sort {
    display: flex;
    justify-content: space-between;
    padding: 50px 0;
    padding: 20px 120px;
  }
  #catalog {
    padding: 20px 120px;
    display: grid;
    gap: 30px;
    justify-content: center;
    // padding: 30px 0;
    // border: 1px solid red;
    grid-template-columns: repeat(3, 400px);
    // @include media("<=tablet") {
    //   grid-template-columns: repeat(1, 400px);
    // }
  }
  #footer {
    display: flex;
    justify-content: center;
    padding: 30px;
    background-color: #ccc;
  }
}
</style>
