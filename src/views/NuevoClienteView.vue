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
        <FormKit
          type="form"
          submit-label="Agregar cliente"
          incomplete-message="Por favor corriga los errores y vuelva a intentarlo"
        >
          <FormKit
            type="text"
            label="Nombre*"
            placeholder="Nombre del cliente"
            validation="required"
            :validation-messages="{ required: 'El nombre del cliente es obligatorio' }"
          />

          <FormKit
            type="text"
            label="Apellido*"
            placeholder="Apellido del cliente"
            validation="required"
            :validation-messages="{ required: 'El apellido del cliente es obligatorio' }"
          />

          <FormKit
            type="email"
            label="Email*"
            placeholder="Email del cliente"
            validation="required|email"
            :validation-messages="{
              required: 'El email del cliente es obligatorio',
              email: 'Ingrese un email válido',
            }"
          />

          <FormKit
            type="text"
            label="Teléfono"
            placeholder="Teléfono: XXX-XXX-XXXX"
            validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
            :validation-messages="{ matches: 'El formato no es válido' }"
          />

          <FormKit type="text" label="Empresa" placeholder="Empresa del cliente" />

          <FormKit type="text" label="Puesto" placeholder="Puesto del cliente" />
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
