import api from "../lib/axios";

export default {
  obtenerClientes() {
    return api.get("/clientes");
  },
  agregarCliente(data) {
    return api.post("http://localhost:4000/clientes", data)
  }
};
