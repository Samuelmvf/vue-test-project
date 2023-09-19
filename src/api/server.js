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
