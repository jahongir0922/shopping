<template>
  <div id="evryprpduct">
    <div id="everyrasm">
      <div id="arrowback">
        <img @click="back" src="/src/assets/images/icons/back.png" />
      </div>
      <img id="rasm" :src="mahsulotbazadan[0].rasm" alt="" />
      <div id="rasmqoshimcha">
        <img
          @click="
            () => {
              mahsulotbazadan[0].rasm = it;
            }
          "
          v-for="(it, index) in mahsulotbazadan[0].rasmqoshimcha"
          :key="index"
          :src="it"
          alt=""
        />
      </div>
    </div>
    <div id="abouteveryproduct">
      <h1>{{ $route.params.id }}</h1>
      <div id="baho_scope">
        <img
          v-for="(item, index) in 5"
          :key="index"
          src="/src/assets/images/icons/star.svg"
          alt=""
        />
        <div id="baho">
          <img
            v-for="(item, index) in mahsulotbazadan[0].yulduzchalar"
            :key="index"
            src="/src/assets/images//icons/starfill.svg"
            alt=""
          />
        </div>
      </div>
      <h1>${{ mahsulotbazadan[0].narx }}</h1>
      <a href="">Buy</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const mahsulotbazadan = ref([]);
const route = useRoute();
const router = useRouter();

function back() {
  router.go(-1);
}
// const prop = defineProps(["jonatmafromcard"]);

// console.log(route.params.id);
// console.log(mahsulotbazadan[0].rasm);

// alert(`"${mahsulotbazadan.value}"`);

const baza = ref([
  {
    nomi: "skateboard",
    rasm: "/src/assets/images/products/skateboard electric.png",
    rasmqoshimcha: [
      "/src/assets/images/products/skateboard electric.png",
      "/src/assets/images/products/skateboard for kids.png",
      "/src/assets/images/products/skateboard normal.png",
    ],
    yulduzchalar: 3,
    narx: "35.5",
    idraqami: "skeyt51215wa",
    sotuvdami: false,
  },
  {
    nomi: "watch",
    rasm: "/src/assets/images/products/smart watch band pink.png",
    rasmqoshimcha: [
      "/src/assets/images/products/smart watch band red.png",
      "/src/assets/images/products/smart watch band white.png",
      "/src/assets/images/products/smart watch band pink.png",
    ],
    yulduzchalar: 2,
    narx: "41.5",
    idraqami: "watch5fsdevcds5515wa",
    sotuvdami: true,
  },
  {
    nomi: "sneaker",
    rasm: "/src/assets/images/products/sneaker black.png",
    rasmqoshimcha: [
      "/src/assets/images/products/sneaker black.png",
      "/src/assets/images/products/sneaker red.png",
      "/src/assets/images/products/sneaker white.png",
      "/src/assets/images/products/sneaker yellow.png",
    ],
    yulduzchalar: 2,
    narx: "15.5",
    idraqami: "sneaker5121115515wa",
    sotuvdami: true,
  },
]);
mahsulotbazadan.value = baza.value.filter((item) => {
  return item.idraqami == route.params.id;
});
</script>

<style lang="scss" scoped>
#evryprpduct {
  padding: 50px;
  display: flex;
  #everyrasm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    #arrowback {
      display: flex;
      align-items: center;
      width: 100%;
      border: 1px solid red;
      img {
        width: 50px;
        border: 1px solid red;
      }
    }
    #rasm {
      width: 70%;
    }
    #rasmqoshimcha {
      display: flex;
      justify-content: space-evenly;
      width: 80%;
      img {
        width: 100px;
      }
    }
  }

  #abouteveryproduct {
    width: 50%;
    padding: 50px;
    #baho_scope {
      #baho {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
}
</style>
