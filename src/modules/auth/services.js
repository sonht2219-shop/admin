import http from "@/common/services/http";

const login = (data) => http.post(`login`, data);
const register = (data) => http.post(`register`, data);

export { login, register }
