import axios from 'axios'

import {
  ApiException,
  BadRequestException,
  DataNotFoundException,
  FetchFailureException,
  NetworkException,
  TimeoutException
} from "@/exception"

export const fakeApi = axios.create({
  baseURL: process.env.VUE_APP_API_URL + process.env.VUE_API_MIRAGE_API_PATH
});

const strategyResponseErrorStatus = {
  400: (message) => { throw new BadRequestException(message) },
  404: (message) => { throw new DataNotFoundException(message) }
}

fakeApi.interceptors.response.use(
  response => {
    return response;
  }, async (error) => {
    if (error.response) {
      const callExceptionExistente = strategyResponseErrorStatus[error.response.status]
      const message = error.response?.data?.message

      if (callExceptionExistente)
        callExceptionExistente(message)

      throw new FetchFailureException(message);
    } else if (error.request) {
      if (!error.config.__isRetryRequest) {
        error.config.__isRetryRequest = true;
        return await fakeApi.request(error.config);
      }

      if (error.code === 'ECONNABORTED') {
        throw new TimeoutException();
      }

      throw new NetworkException()
    } else {
      throw new ApiException("Erro ao realizar requisição.");
    }
  }
);
