import { PageCliente, PageDocumentacao, PageNotFound, PageProduto } from "@/pages"

const routes = [
  {
    path: '/',
    component: PageDocumentacao,
    children: []
  },
  {
    path: '/cliente',
    component: PageCliente,
    children: []
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
