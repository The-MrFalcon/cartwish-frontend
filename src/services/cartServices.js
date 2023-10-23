import apiCliente from "../utils/api-cliente";

export function addToCartAPI(id, quantity) {
  return apiCliente.post(`/cart/${id}`, { quantity });
}

export function getCartAPI() {
  return apiCliente.get("/cart");
}

export function removeFromCartAPI(id) {
  return apiCliente.patch(`/cart/remove/${id}`);
}
export function increaseProductAPI(id) {
  return apiCliente.patch(`/cart/increase/${id}`);
}
export function decreaseProductAPI(id) {
  return apiCliente.patch(`/cart/decrease/${id}`);
}
