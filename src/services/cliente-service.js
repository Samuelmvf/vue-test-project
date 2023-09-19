import { fakeApi } from "@/boot/axios"

const BASE_PATH = '/cliente'

export const cadastrarCliente = (cliente) => {
  return fakeApi.post(BASE_PATH, cliente)
}

export const editarCliente = (cliente) => {
  return fakeApi.put(`${BASE_PATH}/${cliente.id}`, cliente)
}

export const buscarClientePorId = (id) => {
  return fakeApi.get(`${BASE_PATH}/${id}`)
}

export const buscarTodosClientes = () => {
  return fakeApi.get(BASE_PATH)
}

export const deletarClientePorId = (id) => {
  return fakeApi.delete(`${BASE_PATH}/${id}`)
}
