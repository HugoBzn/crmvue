<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  cliente: {
    type: Object,
  },
});

const nombreCliente = computed(() => {
  return props.cliente.nombre + " " + props.cliente.apellido;
});
</script>

<template>
  <tr>
    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
      <p class="font-medium text-gray-900 capitalize">{{ nombreCliente }}</p>
      <p class="text-gray-500">{{ cliente.email }}</p>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      <p class="text-gray-900 font-bold capitalize">{{ cliente.empresa }}</p>
      <p class="text-gray-600 capitalize">{{ cliente.puesto }}</p>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm"></td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      <RouterLink to="/" class="text-indigo-600 hover:text-indigo-500 mr-5">Editar</RouterLink>
      <RouterLink to="/" class="text-red-600 hover:text-red-500">Eliminar</RouterLink>
    </td>
  </tr>
</template>
