<script setup>
import { onMounted, ref } from "vue";

import axios from "axios";

import RouterLink from "../components/UI/RouterLink.vue";
import Title from "../components/UI/Title.vue";

const clientes = ref([]);

onMounted(() => {
  axios("http://localhost:4000/clientes")
    .then(({ data }) => (clientes.value = data))
    .catch((error) => console.log("Hubo un error"));
});

defineProps({
  titleProp: {
    type: String,
  },
});
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="agregar-cliente"> Agregar cliente </RouterLink>
    </div>
    <Title>{{ titleProp }}</Title>
  </div>
</template>
