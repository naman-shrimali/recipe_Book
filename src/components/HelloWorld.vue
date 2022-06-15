<template>
  <div>
    <div v-if="loading" class="loader"><h1>Loading.....</h1></div>
    <div v-else>
      <v-container>
        <Navbar v-if="recipes_all != []" :recipes_all="recipes_all" />
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
                  <v-card-text class="p-4">
                    <div>Title</div>
                    <p class="text-h4 text--primary">{{ item.name }}</p>
                    <p>Created At :</p>
                    <div class="text--primary">
                      {{ new Date(item.created_at).toLocaleDateString("en-US")
                      }}<br />
                      <hr />
                    </div>
                  </v-card-text>
                  <v-card-actions class="mt-0">
                    <v-btn color="primary" dark @click.stop="dialog = true">
                      Learn More
                    </v-btn>
                    <v-dialog
                      v-model="dialog"
                      fullscreen
                      hide-overlay
                      transition="dialog-bottom-transition"
                    >
                      <div v-if="item.recipes">
                        <h1>No Recipes Available</h1>
                      </div>
                      <v-card v-else>
                        <v-toolbar dark color="dark">
                          <v-btn icon dark @click="dialog = false">
                            <v-icon>mdi-close</v-icon>
                          </v-btn>
                        </v-toolbar>
                        <v-container fluid>
                          <v-row dense>
                            <v-col
                              v-for="card in item.recipes"
                              :key="card.id"
                              cols="4"
                              align-self="auto"
                            >
                              <v-card>
                                <v-img
                                  :src="card.thumbnail_url"
                                  class="white--text align-end"
                                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                  height="200px"
                                >
                                  <v-card-title
                                    v-text="card.name"
                                  ></v-card-title>
                                </v-img>

                                <v-card-actions>
                                  <v-btn
                                    text
                                    color="dark"
                                    @click="reveal = true"
                                  >
                                    Learn More
                                  </v-btn>
                                  <v-spacer></v-spacer>

                                  <v-btn icon>
                                    <v-row>
                                      <v-icon>mdi-thumb-up</v-icon>
                                      <p>
                                        {{ card.user_ratings.count_positive }}
                                      </p>
                                    </v-row>
                                  </v-btn>
                                  <v-btn icon>
                                    <v-row>
                                      <v-icon>mdi-thumb-down</v-icon>
                                      <p>
                                        {{ card.user_ratings.count_negative }}
                                      </p>
                                    </v-row>
                                  </v-btn>
                                </v-card-actions>
                                <v-expand-transition>
                                  <v-card
                                    v-if="reveal"
                                    class="transition-fast-in-fast-out v-card--reveal"
                                    style="height: 100%"
                                  >
                                    <v-card-text class="pb-0">
                                      <p class="text-h4 text--primary">
                                        {{
                                          new Date(
                                            card.created_at
                                          ).toLocaleDateString("en-US")
                                        }}
                                      </p>
                                      <p>
                                        {{ card.description }}
                                      </p>
                                    </v-card-text>
                                    <v-card-actions class="pt-0">
                                      <v-btn
                                        text
                                        color="dark"
                                        @click="reveal = false"
                                      >
                                        Close
                                      </v-btn>
                                    </v-card-actions>
                                  </v-card>
                                </v-expand-transition>
                              </v-card>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card>
                    </v-dialog>
                  </v-card-actions>
                </v-card>
              </v-carousel-item>
            </v-carousel>
          </v-row>
        </v-main>
      </v-container>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import Navbar from "../views/Navbar.vue";
Vue.use(VueAxios, axios);
export default {
  name: "HelloWorld",

  data: () => ({
    reveal: false,
    info: [],
    a: "",
    current_recipe: "",
    dialog: false,
    recipes_all: [],
    loading: true,
  }),
  components: {
    Navbar,
  },
  created() {
    this.show();
  },
  methods: {
    async show() {
      await Vue.axios
        .get(
          "https://tasty.p.rapidapi.com/recipes/list/?rapidapi-key=ed31a19d34msh5682f4adcc1f433p10ab15jsnaab6d71534d2"
        )
        .then((resp) => {
          this.info = resp.data.results;
          this.loading = false;
          //console.log(this.info);
        })
        .catch((error) => {
          console.log(error);
        });
      this.recipes_all = this.info.map((d) => d.recipes);
      //console.log(this.recipes_all);
      this.recipes_all = this.flatten(this.recipes_all);
      //console.log(this.recipes_all);
    },
    flatten(ary) {
      var ret = [];
      for (var i = 0; i < ary.length; i++) {
        if (Array.isArray(ary[i])) {
          ret = ret.concat(this.flatten(ary[i]));
        } else {
          ret.push(ary[i]);
        }
      }
      return ret;
    },
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
.loader {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
