<script setup>
import { FormKit } from "@formkit/vue";
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

    <div class="mx-auto mt-10 bg-white shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">
        <FormKit type="form">
          <FormKit
            type="text"
            label="Nombre"
            placeholder="Nombre del cliente"
            help="Coloca el nombre del cliente que deseas registrar"
            validation="required"
            :validation-messages="{ required: 'El nombre del cliente es obligatorio' }"
          />
        </FormKit>
      </div>
    </div>
  </div>
</template>

<style>
.formkit-wrapper {
  max-width: 100%;
}
</style>
