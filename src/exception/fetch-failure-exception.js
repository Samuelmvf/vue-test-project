import { ApiException } from "@/exception"

export class FetchFailureException extends ApiException {
  constructor(message = "Falha ao buscar dados.") {
    super(message);
    this.name = "FetchFailureException";
  }
}
