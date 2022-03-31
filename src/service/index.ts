import LycRequest from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"
import { LycRequestInterceptors } from "./request/types"

const interceptors: LycRequestInterceptors = {
  requestInterceptor: (config) => {
    return config
  },
  requestInterceptorCatch: (err) => {
    return err
  },
  responseInterceptor: (res) => {
    return res
  },
  responseInterceptorCatch: (err) => {
    return err
  }
}

const lycRequest = new LycRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors
})

export default lycRequest
