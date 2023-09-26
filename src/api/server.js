import { createServer, Model, Response } from 'miragejs'
import { rulesEmail, rulesRequired } from "@/utils/rules";

// Constantes para simular um atraso na respota da API
// Podendo assim emitir ações de carregamento
const TIMEOUT_GET_MS = 300
const TIMEOUT_POST_PUT_DELETE_MS = 300

const clienteRules = {
  nome: [rulesRequired],
  documento: [rulesRequired],
  telefone: [rulesRequired],
  email: [rulesRequired, rulesEmail]
}

const produtoRules = {
  nome: [rulesRequired],
}

const checaEntidadeEstaInvalida = (entidade, rules) => {
  debugger
  const camposChecados = Object.entries(rules).reduce((acc, [key, value]) => {
    value.forEach(regra => {
      acc.push(regra(entidade[key]))
    })
    return acc
  }, [])

  return camposChecados.some(val => typeof val === 'string')
}

createServer({
  models: {
    cliente: Model,
    produto: Model
  },

  seeds(server) {
    server.db.loadData({
      clientes: [
        {
          id: "1",
          nome: 'Samuel Maia',
          documento: '123.456.789-10',
          telefone: 31975610500,
          email: 'samuel.maia@gmail.com',
          ativo: false,
          produtos: []
        },
        {
          id: "2",
          nome: 'Lorem Ipsum',
          documento: '987.654.321-00',
          telefone: 31975610500,
          email: 'lorem.ipsum@loremipsum.com.br',
          ativo: false,
          produtos: []
        },
        {
          id: "3",
          nome: 'Danilo Santos',
          documento: '111.222.333-44',
          telefone: 31975610500,
          email: 'danilo.santos@loremipsum.com.br',
          ativo: false,
          produtos: []
        },
        {
          id: "4",
          nome: 'Ketsia Martins',
          documento: '555.666.777-88',
          telefone: 31975610500,
          email: 'ketsia.martins@loremipsum.com.br',
          ativo: false,
          produtos: []
        },
        {
          id: "5",
          nome: 'Fernandes Tourino',
          documento: '999.888.777-66',
          telefone: 31975610500,
          email: 'fernandes.tourino@loremipsum.com.br',
          ativo: true,
          produtos: []
        },
        {
          id: "6",
          nome: 'Joaquin Perrela',
          documento: '777.888.999-00',
          telefone: 31975610500,
          email: 'joaquin.perrela@loremipsum.com.br',
          ativo: true,
          produtos: []
        },
        {
          id: "7",
          nome: 'Scott Lander',
          documento: '222.333.444-55',
          telefone: 31975610500,
          email: 'scott.lander@loremipsum.com.br',
          ativo: true,
          produtos: []
        }
      ],
      produtos: [
        {
          id: "1",
          nome: "Stone station",
          ativo: true
        },{
          id: "2",
          nome: "Mailing List",
          ativo: true
        },{
          id: "3",
          nome: "Enriquecimento de dados",
          ativo: true
        }
      ]
    })
  },

  routes() {
    this.namespace = process.env.VUE_API_MIRAGE_API_PATH

    // CLIENTES
    this.get('/cliente', () => {
      return this.schema.all('cliente')
    }, { timing: TIMEOUT_GET_MS});

    this.get("/cliente/:id", (schema, request) => {
      const id = request.params.id
      const cliente =  schema.find('cliente', id)

      if (!cliente)
        return new Response(404, {}, { message: 'Falha ao buscar o cliente. Tente novamente...' })

      return cliente
    })

    this.post('/cliente', (schema, { requestBody }) => {
      const cliente = JSON.parse(requestBody)

      if (!Object.hasOwn(cliente, 'produtos')) {
        cliente.produtos = []
      }

      if (checaEntidadeEstaInvalida(cliente, clienteRules))
        return new Response(400);
      else
        return schema.create('cliente', cliente);

    }, { timing: TIMEOUT_POST_PUT_DELETE_MS})

    this.put('/cliente/:id', (schema, { requestBody, params }) => {
      const body = JSON.parse(requestBody)
      const id = params.id
      const cliente = schema.find('cliente', id)

      if (!cliente)
        return new Response(404, {}, { message: 'Falha ao atualizar cliente, o cliente relatado não foi encontrado.' })
      else if (checaEntidadeEstaInvalida(body, clienteRules))
        return new Response(400)

      return cliente.update(requestBody)
    }, { timing: TIMEOUT_POST_PUT_DELETE_MS})

    this.delete('/cliente/:id', (schema, request) => {
      const id = request.params.id
      const cliente = schema.find('cliente', id)

      if (!cliente)
        return new Response(404, {}, { message: 'Falha ao deletar cliente, o cliente relatado não foi encontrado.' })

      return cliente.destroy()
    }, { timing: TIMEOUT_POST_PUT_DELETE_MS})

    // PRODUTOS
    this.get('/produto', () => {
      return this.schema.all('produto')
    }, { timing: TIMEOUT_GET_MS})

    this.get("/produto/:id", (schema, request) => {
      const id = request.params.id
      const produto = schema.find('produto', id)

      if (!produto)
        return new Response(404, {}, { message: 'Falha ao buscar produto. Tente novamente...' })

      return produto
    })

    this.post('/produto', (schema, request) => {
      const produto = JSON.parse(request.requestBody)

      if (checaEntidadeEstaInvalida(produto, produtoRules))
        return new Response(400);
      else
        return schema.create('produto', produto);
    }, { timing: TIMEOUT_POST_PUT_DELETE_MS})

    this.put('/produto/:id', (schema, request) => {
      const requestBody = JSON.parse(request.requestBody)
      const id = request.params.id
      const produto = schema.find('produto', id)

      if (!produto)
        return new Response(404, {}, { message: 'Falha ao atualizar produto, o produto relatado não foi encontrado.' })
      else if (checaEntidadeEstaInvalida(produto, produtoRules))
        return new Response(400)

      return produto.update(requestBody)
    }, { timing: TIMEOUT_POST_PUT_DELETE_MS})

    this.delete('/produto/:id', (schema, request) => {
      const id = request.params.id
      const produto = schema.find('produto', id)

      if (!produto)
        return new Response(404, {}, { message: 'Falha ao deletar produto, o produto relatado não foi encontrado.' })

      return produto.destroy()
    }, { timing: TIMEOUT_POST_PUT_DELETE_MS})
  }
})
