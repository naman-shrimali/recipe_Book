<template>
  <div class="navbar">
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
          <h2>Recipe-Search</h2>
        </div>
      </div>

      <v-spacer></v-spacer>

      <v-autocomplete
        color="white"
        hide-no-data
        hide-selected
        item-text="Description"
        placeholder="Start typing to Search"
        prepend-icon="mdi-magnify"
        return-object
      ></v-autocomplete>
    </v-app-bar>
  </div>
</template>
