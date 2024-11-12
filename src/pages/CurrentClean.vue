<template>
  <Navbar />
  <main class="main">
    <div class="main__clean-current">
      <div class="container">
        <div class="main__clean-current_block">
          <h2 class="main__clean-current_title">{{ getClean.title }}</h2>
          <div class="main__clean-current_left">
            <img :src="getClean.img" alt="" />
          </div>
          <div class="main__clean-current_right">
            <p class="main__clean-current_price">
              <span>{{ $t("clean.price") }} </span> {{ getClean.price }} <br />
              <span>{{ $t("clean.priceInfo") }}</span>
            </p>
            <h2 class="main__clean-current_info">{{ $t("clean.info") }}</h2>
            <p class="main__clean-current_text">{{ getClean.text }}</p>
          </div>
        </div>
        <router-link to="/clean" class="main__clean-current_back">{{
          $t("clean.back")
        }}</router-link>
      </div>
    </div>
  </main>
  <Footer />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      clean: [
        {
          id: 1,
          title: this.$t("clean.itemOne.title"),
          text: this.$t("clean.itemOne.text"),
          price: this.$t("clean.priceOne"),
          img: require("@/assets/img/clean-1.png"),
        },
        {
          id: 2,
          title: this.$t("clean.itemTwo.title"),
          text: this.$t("clean.itemTwo.text"),
          price: this.$t("clean.priceOne"),
          img: require("@/assets/img/clean-1.png"),
        },
        {
          id: 3,
          title: this.$t("clean.itemThree.title"),
          text: this.$t("clean.itemThree.text"),
          price: this.$t("clean.priceOne"),
          img: require("@/assets/img/clean-1.png"),
        },
        {
          id: 4,
          title: this.$t("clean.itemFour.title"),
          text: this.$t("clean.itemFour.text"),
          price: this.$t("clean.priceTwo"),
          img: require("@/assets/img/clean-1.png"),
        },
        {
          id: 5,
          title: this.$t("clean.itemFive.title"),
          text: this.$t("clean.itemFive.text"),
          price: this.$t("clean.priceTwo"),
          img: require("@/assets/img/clean-1.png"),
        },
        {
          id: 6,
          title: this.$t("clean.itemSix.title"),
          text: this.$t("clean.itemSix.text"),
          price: this.$t("clean.priceThree"),
          img: require("@/assets/img/clean-1.png"),
        },
      ],
      currentId: null,
    };
  },
  created() {
    this.currentId = this.$route.params.id;
  },
  computed: {
    getClean() {
      return this.clean.find((clean) => clean.id == this.currentId);
    },
  },
};
</script>

<style>
</style>