<template>
  <v-container>
    <v-main class="mr-0 ml-0 pl-0 pr-0">
      <v-row class="mt-4 row-center">
        <swiper :options="swiperOptions">
          <!-- <v-col class="mr-2 ml-2" cols="auto"> -->
          <swiper-slide class="swiper-slide">
            <v-card class="mr-0 ml-0 pl-0 pr-0 recipe" cols="6">
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>
              <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>
              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>
                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="orange" text>Share</v-btn>
                <v-btn color="orange" text>Explore </v-btn>
              </v-card-actions>
            </v-card>
          </swiper-slide>
          <!-- </v-col> -->
          <!-- <v-col class="mr-2 ml-2" cols="auto"> -->
          <swiper-slide class="swiper-slide">
            <v-card class="mr-0 ml-0 pl-0 pr-0 recipe" cols="6">
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>
              <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>
              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>
                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="orange" text> Share </v-btn>
                <v-btn color="orange" text> Explore </v-btn>
              </v-card-actions>
            </v-card>
          </swiper-slide>
          <!-- </v-col> -->
          <!-- <v-col class="mr-2 ml-2" cols="auto"> -->
          <swiper-slide class="swiper-slide">
            <v-card class="mr-0 ml-0 pl-0 pr-0 recipe" cols="6">
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>
              <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>
              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>
                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="orange" text> Share </v-btn>
                <v-btn color="orange" text> Explore </v-btn>
              </v-card-actions>
            </v-card>
          </swiper-slide>
          <!-- </v-col> -->
          <!-- <v-col class="mr-2 ml-2 pl-0 pr-0" cols="auto"> -->
          <swiper-slide class="swiper-slide">
            <v-card class="mr-0 ml-0 pl-0 pr-0 recipe" cols="6">
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>
              <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>
              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>
                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="orange" text> Share </v-btn>
                <v-btn color="orange" text> Explore </v-btn>
              </v-card-actions>
            </v-card>
          </swiper-slide>
          <!-- </v-col> -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </v-row>
    </v-main>
  </v-container>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
Vue.use(VueAxios, axios);
export default {
  name: "HelloWorld",

  data: () => ({
    recipes: [],
    swiperOptions: {
      slidesPerView: 2,
      spaceBetween: 50,
      freeMode: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
  }),
  components: {
    swiper,
    swiperSlide,
  },
  mounted() {
    // eslint-disable-next-line prettier/prettier
    Vue.axios.get("https://tasty.p.rapidapi.com/recipes/list/?rapidapi-key=b0833ee68cmshbf7dab8ea12768cp1c7ef6jsn419376a6daea")
      .then((response) => console.log(response.data.results));
    // console.log(this.recipes);
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>
<style>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.row-center {
  display: flex;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.swiper-container {
  height: 450px;
  width: 100%;
}
.recipe {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  text-align: left;
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  background-size: contain;
  background-position: center;
}
</style>
