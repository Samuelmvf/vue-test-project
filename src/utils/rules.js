const rulesRequired = (val) => {
  return !!val || 'Campo obrigatório.'
}
const rulesEmail =  (val) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  return emailRegex.test(val) || 'O email digitado é inválido.'
}
const rulesTelefone = (val) => {
  return val.length >= 10 || 'O telefone digitado é inválido.'
}

export {
  rulesRequired,
  rulesEmail,
  rulesTelefone
}
