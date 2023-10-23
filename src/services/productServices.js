import apiCliente from "../utils/api-cliente";

export function getSuggestionsAPI(search) {
  return apiCliente.get(`/products/suggestions?search=${search}`);
}
