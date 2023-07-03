<script setup>
// Vue
import { RouterView } from "vue-router";

// Components
import Header from "./components/UI/Header.vue";
</script>

<template>
  <Header />

  <main class="max-w-6xl mx-auto mt-10">
    <RouterView />
  </main>
</template>

<style lang="css">
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #fff;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #1e293b;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #0b1016;
}
</style>
