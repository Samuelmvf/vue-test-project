import { fakeApi } from "@/boot/axios"

const BASE_PATH = '/produto'

const cadastrar = (produto) => {
  return fakeApi.post(BASE_PATH, produto)
}

const editar = (id, produto) => {
  return fakeApi.put(`${BASE_PATH}/${id}`, produto)
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
