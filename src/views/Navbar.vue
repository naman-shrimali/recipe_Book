<template>
  <div class="navbar" v-if="recipes_all_names != []">
    <v-app-bar app color="light" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="mr-2"
          contain
          src="../assets/Recipe.svg"
          transition="scale-transition"
          width="80"
        />

        <div class="font-weight-medium">
          <h2>Recipe Book</h2>
        </div>
      </div>

      <v-spacer></v-spacer>

      <!-- <v-autocomplete
        color="white"
        :items="recipes_all_names"
        hide-no-data
        hide-selected
        item-text="Description"
        placeholder="Start typing to Search"
        prepend-icon="mdi-magnify"
        return-object
      ></v-autocomplete> -->
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  props: ["recipes_all"],
  data() {
    return {
      recipes_all_names: [],
    };
  },
  created() {
    // this.extractnames();
  },
  methods: {
    // async extractnames() {
    //   this.recipes_all_names = this.recipes_all.map((d) => d.name);
    //   console.log(this.recipes_all);
    // },
  },
};
</script>
