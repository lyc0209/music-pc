import lycRequest from "@/service"

enum LoginApi {
  cellphoneLogin = "login/cellphone"
}

/**
 * 使用手机号登录
 * @param data 手机号、密码
 */
export function loginByCellPhone(data: { phone: string; password: string }) {
  return lycRequest.post({
    url: LoginApi.cellphoneLogin,
    data: data
  })
}
