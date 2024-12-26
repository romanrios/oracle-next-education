import axios from "axios"

export const api = axios.create({
    baseURL: "https://676c86c50e299dd2ddfcfb47.mockapi.io/"
})

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url)
    setData(respuesta.data)
}