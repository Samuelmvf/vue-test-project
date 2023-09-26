import { ApiException } from "@/exception"

export class BadRequestException extends ApiException {
  constructor(message = "Requisição inválida.") {
    super(message);
    this.name = "BadRequestException";
  }
}
