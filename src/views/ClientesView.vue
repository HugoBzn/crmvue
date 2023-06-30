<script setup>
import RouterLink from "../components/UI/RouterLink.vue";
import Title from '../components/UI/Title.vue';
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="agregar-cliente"> Agregar cliente </RouterLink>
    </div>
    <Title>Listado de Clientes</Title>
  </div>
</template>
