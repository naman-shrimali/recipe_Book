<template>
  <div class="card-container">
    <h1>{{ $route.params.id }}</h1>
    <!-- <div class="card">
      <div class="recipe-card">
        <div class="recipe-card-image">
          <img :src="recipe.image" />
        </div>
        <div class="recipe-card-content">
          <router-link to="/">
            <a href="" class="inline-link">
              <span class="material-icons">cancel</span>
            </a>
          </router-link>
          <h2 class="recipe-type">{{ recipe.dishTypes[0] }}</h2>
          <h1 class="recipe-title">{{ recipe.title }}</h1>
          <ul class="recipe-stats">
            <li class="recipe-stats-item">
              <h2>{{ recipe.readyInMinutes }}</h2>
              <p>Mins</p>
            </li>
            <li class="recipe-stats-item">
              <h2>{{ recipe.servings }}</h2>
              <p>servings</p>
            </li>
            <li class="recipe-stats-item">
              <h2>4</h2>
              <p>Ingredients</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="recipe-details">
        <div class="recipe-summary">
          <h2>Methods</h2>
          <p>{{ recipe.instructions }}</p>
        </div>
        <div class="recipe-ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li
              v-for="ingridients in recipe.extendedIngredients"
              :key="ingridients.id"
            >
              {{ ingridients.original }}
            </li>
          </ul>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "recipe-detail",
  data() {
    return {
      recipes: [],
    };
  },
  props: ["id"],
};
</script>

<style></style>
