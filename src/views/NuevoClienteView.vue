<script setup>
import { FormKit } from "@formkit/vue";
import { useRouter } from "vue-router";

import ClienteService from "../services/ClienteService";

import RouterLink from "../components/UI/RouterLink.vue";
import Title from "../components/UI/Title.vue";

const router = useRouter();

defineProps({
  titleProp: {
    type: String,
  },
});

const handleSubmit = (data) => {
  data.estado = true;
  ClienteService.agregarCliente(data)
    .then((respuesta) => {
      console.log(respuesta);
      // Redireccionar usuario
      router.push({ name: "home" });
    })
    .catch((error) => console.log(error));
};
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
          @submit="handleSubmit"
        >
          <FormKit
            type="text"
            label="Nombre*"
            name="nombre"
            placeholder="Nombre del cliente"
            validation="required"
            :validation-messages="{ required: 'El nombre del cliente es obligatorio' }"
          />

          <FormKit
            type="text"
            label="Apellido*"
            name="apellido"
            placeholder="Apellido del cliente"
            validation="required"
            :validation-messages="{ required: 'El apellido del cliente es obligatorio' }"
          />

          <FormKit
            type="email"
            label="Email*"
            name="email"
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
            name="telefono"
            placeholder="Teléfono: XXX-XXX-XXXX"
            validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
            :validation-messages="{ matches: 'El formato no es válido' }"
          />

          <FormKit type="text" label="Empresa" name="empresa" placeholder="Empresa del cliente" />

          <FormKit type="text" label="Puesto" name="puesto" placeholder="Puesto del cliente" />
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
