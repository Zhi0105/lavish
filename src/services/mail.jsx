import { apiClient } from "src/http-commons";

export const sendEmail = (payload) => {
  let params = {
    name: payload.name,
    address: payload.address,
    mobile: payload.mobile,
    email: payload.email,
    service: payload.service
  }

  const result = apiClient.post('/mailer/send', params).then(res => {
    return res.data
  })
  return result
}