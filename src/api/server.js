import { createServer, Model } from 'miragejs'

// Constantes para simular um atraso na respota da API
// Podendo assim emitir ações de carregamento
const TIMEOUT_GET_MS = 300
const TIMEOUT_POST_PUT_DELETE_MS = 300

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
          documento: '13199879667',
          telefone: '3134869927',
          email: 'samuelmvf@gmail.com',
          ativo: true,
          produtos: []
        },
        {
          id: "2",
          nome: 'Lorem Ipsum',
          documento: '999999',
          telefone: '31999998888',
          email: 'loremipsum@loremipsum.com.br',
          ativo: true,
          produtos: []
        }
      ],
      produtos: [
        {
          id: "1",
          nome: "Stone station - Plataforma online",
          ativo: true
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    // CLIENTES
    this.get('/cliente', () => {
      return this.schema.all('cliente')
    }, { timing: TIMEOUT_GET_MS});

    this.get("/cliente/:id", (schema, request) => {
      const id = request.params.id
      return schema.find('cliente', id)
    })

    this.post('/cliente', (schema, request) => {
      const cliente = JSON.parse(request.requestBody)

      if (!Object.hasOwn(cliente, 'produtos')) {
        cliente.produtos = []
      }
      return schema.create('cliente', cliente);
    }, { timing: TIMEOUT_POST_PUT_DELETE_MS})

    this.put('/cliente/:id', (schema, request) => {
      const requestBody = JSON.parse(request.requestBody)
      const id = request.params.id
      const cliente = schema.find('cliente', id)
      return cliente.update(requestBody)
    }, { timing: TIMEOUT_POST_PUT_DELETE_MS})

    this.delete('/cliente/:id', (schema, request) => {
      const id = request.params.id
      return schema.find('cliente', id).destroy()
    }, { timing: TIMEOUT_POST_PUT_DELETE_MS})

    // PRODUTOS
    this.get('/produto', () => {
      return this.schema.all('produto')
    }, { timing: TIMEOUT_GET_MS})

    this.get("/produto/:id", (schema, request) => {
      const id = request.params.id
      return schema.find('produto', id)
    })

    this.post('/produto', (schema, request) => {
      const produto = JSON.parse(request.requestBody)
      return schema.create('produto', produto);
    }, { timing: TIMEOUT_POST_PUT_DELETE_MS})

    this.put('/produto/:id', (schema, request) => {
      const requestBody = JSON.parse(request.requestBody)
      const id = request.params.id
      const produto = schema.find('produto', id)
      return produto.update(requestBody)
    }, { timing: TIMEOUT_POST_PUT_DELETE_MS})

    this.delete('/produto/:id', (schema, request) => {
      const id = request.params.id
      return schema.find('produto', id).destroy()
    }, { timing: TIMEOUT_POST_PUT_DELETE_MS})
  }
})
