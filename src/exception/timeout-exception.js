import { ApiException } from "@/exception"

export class TimeoutException extends ApiException {
    constructor(message = "Falha ao executar requisição, a solicitação excedeu o tempo limite.") {
        super(message);
        this.name = "TimeoutException";
    }
}
