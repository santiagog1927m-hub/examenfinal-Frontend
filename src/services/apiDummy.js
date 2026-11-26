import axios from "axios";

// Creamos una instancia de Axios con la dirección de la API
const apiDummy = axios.create({
    baseURL: "https://dummyjson.com"
});


export default apiDummy;
