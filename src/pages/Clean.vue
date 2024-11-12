<template>
  <Header />
  <main class="main">
    <div class="main__clean">
      <div class="container">
        <h2 class="main__clean-title">{{ $t("clean.title") }}</h2>
        <p class="main__clean-text">{{ $t("clean.text") }}</p>
        <div class="main__clean-block">
          <router-link :to="/clean/ + item.id" class="main__clean-item" v-for="item in clean" :key="item.id">
            <img :src="item.img" alt="" class="main__clean-img" />
            <h2 class="main__clean-block_title">{{ item.title }}</h2>
            <p class="main__clean-block_text">
              {{ item.text }}
              <br />
              <span class="main__clean-block_span">{{ item.price }}</span>
            </p>
            <router-link
              :to="/clean/ + item.id"
              class="main__clean-link arrow-right"
              >{{ $t("clean.more") }}</router-link
            >
          </router-link>
        </div>
      </div>
    </div>
    <MainCommunication />
  </main>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import MainCommunication from "@/components/MainCommunication.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { MainCommunication, Footer, Header },
  data() {
    return {
      clean: [
        {
          id: 1,
          title: this.$t("clean.itemOne.title"),
          text: this.$t("clean.itemOne.text"),
          price: "от 1 000 000 сум",
          img: require("@/assets/img/clean-1.png"),
        },
        {
          id: 2,
          title: this.$t("clean.itemTwo.title"),
          text: this.$t("clean.itemTwo.text"),
          price: "от 1 000 000 сум",
          img: require("@/assets/img/clean-1.png"),
        },
        {
          id: 3,
          title: this.$t("clean.itemThree.title"),
          text: this.$t("clean.itemThree.text"),
          price: "от 1 000 000 сум",
          img: require("@/assets/img/clean-1.png"),
        },
        {
          id: 4,
          title: this.$t("clean.itemFour.title"),
          text: this.$t("clean.itemFour.text"),
          price: "от 1 800 000 сум",
          img: require("@/assets/img/clean-1.png"),
        },
        {
          id: 5,
          title: this.$t("clean.itemFive.title"),
          text: this.$t("clean.itemFive.text"),
          price: "от 1 800 000 сум",
          img: require("@/assets/img/clean-1.png"),
        },
        {
          id: 6,
          title: this.$t("clean.itemSix.title"),
          text: this.$t("clean.itemSix.text"),
          price: "от 3 500 000 сум",
          img: require("@/assets/img/clean-1.png"),
        },
      ],
    };
  },
};
</script>

<style>
</style>

