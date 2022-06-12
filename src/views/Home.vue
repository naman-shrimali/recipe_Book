<template>
  <div>
    <Navbar />
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import Navbar from "./Navbar.vue";
export default {
  name: "Home",

  components: {
    HelloWorld,
    Navbar,
  },
};
</script>
