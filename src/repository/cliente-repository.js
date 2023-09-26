import { fakeApi } from "@/boot/axios"

const BASE_PATH = '/cliente'

const cadastrar = (cliente) => {
  return fakeApi.post(BASE_PATH, cliente)
}

const editar = (id, cliente) => {
  return fakeApi.put(`${BASE_PATH}/${id}`, cliente)
}

const buscarPorId = (id) => {
  return fakeApi.get(`${BASE_PATH}/${id}`)
}

const buscarTodos = () => {
  return fakeApi.get(BASE_PATH)
}

const deletarPorId = (id) => {
  return fakeApi.delete(`${BASE_PATH}/${id}`)
}

export default {
  cadastrar,
  editar,
  buscarPorId,
  buscarTodos,
  deletarPorId
}
