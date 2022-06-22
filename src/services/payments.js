import http from "./http";

export const submitPayment = payload => http.post('/pagar', payload)