import http from "@/common/services/http";

export const create = (data) => http.post(`users`, data);
export const edit = (data) => http.patch(`users/${data.id}`, data);
export const single = (id) => http.get(`users/${id}`);
export const list = (params) => http.get(`users`, { params });
export const remove = (id) => http.delete(`users/${id}`);
