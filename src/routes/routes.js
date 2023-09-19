import {
  PageCliente, PageCadastroCliente, PageEditarCliente, PageAssociarProduto,
  PageDocumentacao, PageNotFound, PageProduto, PageListagemCliente
} from "@/pages"

const routes = [
  {
    path: '/',
    component: PageDocumentacao,
    children: []
  },
  {
    path: '/cliente',
    component: PageCliente,
    children: [
      { path: '', component: PageListagemCliente },
      { path: 'cadastrar', component: PageCadastroCliente },
      {
        path: ':id',
        children: [
          { path: '', component: PageEditarCliente},
          { path: 'associar-produto', component: PageAssociarProduto},
        ]
      }
    ]
  },
  {
    path: '/produto',
    component: PageProduto,
    children: []
  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound,
    children: []
  }
]

export default routes
