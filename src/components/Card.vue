<template>
  <div id="card">
    <div id="background" ref="background">
      <span id="sale" v-if="prop.jonatma.sotuvdami">Sale!</span>
      <!-- <img id="rasm" :src="prop.jonatma.rasm" alt="" /> -->
    </div>
    <div id="aboutproduct">
      <span>{{ prop.jonatma.nomi }}</span>
      <div id="baho_scope">
        <img
          v-for="(item, index) in 5"
          :key="index"
          src="/src/assets/images/icons/star.svg"
          alt=""
        />
        <div id="baho">
          <img
            v-for="(item, index) in prop.jonatma.yulduzchalar"
            :key="index"
            src="/src/assets/images//icons/starfill.svg"
            alt=""
          />
        </div>
      </div>
      <span>${{ prop.jonatma.narx }}</span>
      <RouterLink
        :to="'/shopping/' + prop.jonatma.idraqami"
        :jonatmafromcard="prop.jonatma.idraqami"
        >Show more</RouterLink
      >
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";

const prop = defineProps(["jonatma"]);
const background = ref(null);
onMounted(() => {
  background.value.style.backgroundImage = `url("${prop.jonatma.rasm}")`;
});
</script>

<style lang="scss" scoped>
#card {
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  #background {
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    height: 400px;
    background-position: center center;
    background-size: 80%;
    background-repeat: no-repeat;
    #sale {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      background-color: green;
      color: black;
      font-weight: 600;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      top: -25px;
      right: -25px;
    }
    #rasm {
      width: 80%;
    }
  }

  #aboutproduct {
    padding: 20px;
    width: 100%;
    gap: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    #baho_scope {
      #baho {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    a {
      margin-top: 10px;
      background-color: rgb(210, 210, 195);
      padding: 10px;
      border-radius: 5px;
      color: black;
      &:hover {
        background-color: rgb(157, 157, 147);
      }
    }
  }
}
</style>
