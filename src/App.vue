<script setup>
// Vue
import { onMounted } from "vue";
import { RouterView } from "vue-router";

// Components
import Header from "./components/UI/Header.vue";

onMounted(() => {
  setTimeout(() => {
    alert(
      "If you want to visualize the project correctly, I recommend download the project and initializing it, since it makes use of a local API with json-server"
    );
  }, 1000);
  setTimeout(() => {
    alert(
      "Si desea visualizar correctamente el proyecto, recomiendo descargar el proyecto e inicializarlo, ya que hace uso de una API local con json-server"
    );
  }, 2000);
});
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
