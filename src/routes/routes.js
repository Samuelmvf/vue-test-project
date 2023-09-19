import {
  PageCliente, PageCadastroCliente, PageEditarCliente, PageAssociarProduto,
  PageProduto, PageCadastroProduto, PageEditarProduto, PageListagemProduto,
  PageDocumentacao, PageNotFound, PageListagemCliente
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
    children: [
      { path: '', component: PageListagemProduto },
      { path: 'cadastrar', component: PageCadastroProduto },
      { path: ':id', component: PageEditarProduto }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound,
    children: []
  }
]

export default routes
