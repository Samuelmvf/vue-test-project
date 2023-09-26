import { ApiException } from "@/exception"

export class NetworkException extends ApiException {
  constructor(message = "Falha ao executar requisição, verifique sua conexão e/ou rede.") {
    super(message);
    this.name = "NetworkException";
  }
}
