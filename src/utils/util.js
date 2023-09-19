export const clonarFiltrarPropriedades  = (propriedadesRemovidas, objeto) => {
  const copiaObjeto = { ...objeto }
  for (const prop of propriedadesRemovidas) {
    if (Object.hasOwn(copiaObjeto, prop)) {
      delete copiaObjeto[prop]
    }
  }
  return copiaObjeto
}
