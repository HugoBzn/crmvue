<script setup>
// Vue
import { RouterView } from "vue-router";

// Components
import Header from "./components/Header.vue";
</script>

<template>
  <Header />

  <main class="max-w-6xl mx-auto mt-10">
    <RouterView />
  </main>
</template>
