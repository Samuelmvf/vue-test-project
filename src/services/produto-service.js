import { fakeApi } from "@/boot/axios"

const BASE_PATH = '/produto'

export const cadastrarProduto = (produto) => {
  return fakeApi.post(BASE_PATH, produto)
}

export const editarProduto = (produto) => {
  return fakeApi.put(`${BASE_PATH}/${produto.id}`, produto)
}

export const buscarProdutoPorId = (id) => {
  return fakeApi.get(`${BASE_PATH}/${id}`)
}

export const buscarTodosProdutos = () => {
  return fakeApi.get(BASE_PATH)
}

export const deletarProdutoPorId = (id) => {
  return fakeApi.delete(`${BASE_PATH}/${id}`)
}
