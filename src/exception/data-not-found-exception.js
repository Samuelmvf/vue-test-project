import { ApiException } from "@/exception"

export class DataNotFoundException extends ApiException {
  constructor(message = "Dados não encontrados.") {
    super(message);
    this.name = "DataNotFoundException";
  }
}
