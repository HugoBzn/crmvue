<script setup>
import RouterLink from "../components/UI/RouterLink.vue";
import Title from "../components/UI/Title.vue";

defineProps({
  titleProp: {
    type: String,
  },
});
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="home">Volver</RouterLink>
    </div>
    <Title>{{ titleProp }}</Title>
  </div>
</template>
