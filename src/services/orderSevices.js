import apiCliente from "../utils/api-cliente";

export function checkoutAPI() {
  return apiCliente.post("/order/checkout");
}
