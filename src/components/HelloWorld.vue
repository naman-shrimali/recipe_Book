<template>
  <v-container v-if="info != []">
    <Navbar />
    <!-- <aside class="sidebar">
      <router-link
        v-for="recipe in info"
        v-bind:key="recipe.id"
        active-class="is-active"
        class="link"
        :to="{ name: 'post', params: { id: recipe.id } }"
      >
        <br />{{ recipe.id }}. {{ recipe.name }}<br />
      </router-link>
      <div v-for="recipe in info" v-bind:key="recipe.id">
        {{ recipe.name }}
      </div>
    </aside> -->
    <v-main class="mr-0 ml-0 pl-0 pr-0" height="100vh">
      <v-row class="mt-4 row-center">
        <v-carousel>
          <v-carousel-item
            v-for="(item, i) in info"
            :key="i"
            :src="item.thumbnail_url"
            :aspect-ratio="item.aspect_ratio"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <v-card class="ml-14" max-width="250">
              <v-card-text v-if="!reveal" class="p-4">
                <div>Title</div>
                <p class="text-h4 text--primary">{{ item.name }}</p>
                <p>Created At :</p>
                <div class="text--primary">
                  {{ new Date(item.created_at).toLocaleDateString("en-US")
                  }}<br />
                  <hr />
                </div>
              </v-card-text>
              <v-card-actions class="mt-0" v-if="!reveal">
                <v-btn class="mt-0" text color="teal accent-4">
                  <router-link
                    :to="{ name: 'recipe-detail', params: { id: item.id } }"
                  >
                    Learn More
                  </router-link>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-row>
    </v-main>
  </v-container>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import Navbar from "../views/Navbar.vue";
// import { refs } from "vue";
// import recipe-detail from "../views/RecipeDetail.vue"
Vue.use(VueAxios, axios);
export default {
  name: "HelloWorld",

  data: () => ({
    reveal: false,
    info: [],
    a: "",
    current_recipe: "",
  }),
  // computed: {
  //   item_id: function () {
  //     return this.$route.params.id;
  //   },
  // },
  components: {
    Navbar,
    // RecipeDetail,
    // swiper,
    // swiperSlide,
  },
  // mounted() {
  //   // eslint-disable-next-line prettier/prettier
  //   this.show()
  // },
  created() {
    // watch the params of the route to fetch the data again
    // this.$watch(
    //   () => this.$route.params,
    //   () => {
    this.show();
    //   },
    //   // fetch the data when the view is created and the data is
    //   // already being observed
    //   { immediate: true }
    // );
  },
  methods: {
    async show() {
      await Vue.axios
        .get(
          "https://tasty.p.rapidapi.com/recipes/list/?rapidapi-key=b0833ee68cmshbf7dab8ea12768cp1c7ef6jsn419376a6daea"
        )
        .then((resp) => {
          this.info = resp.data.results;
          console.log(this.info);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(this.info[0].recipes[0].name);
    },
    // goto(refName, recipe_id) {
    //   console.log(this.$refs.refName);
    //   var element = this.$refs[refName];
    //   var top = element.offsetTop;
    //   console.log(element);
    //   this.current_recipe = recipe_id;
    //   window.scrollTo(0, top);
    // },
  },
};
</script>
<style>
.div {
  height: 1000px;
  padding: 20px;
  border: 2px solid yellow;
}
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
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
