import apiCliente from "./api-cliente";

const setAuthToken = (token) => {
  if (token) {
    apiCliente.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete apiCliente.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
