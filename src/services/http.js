import axios from "axios";

const http = axios.create({
  baseURL: 'http://domain.com/api',
  timeout: 1000,
  headers: {'Content-Type': 'application/json'}
})

export default http;