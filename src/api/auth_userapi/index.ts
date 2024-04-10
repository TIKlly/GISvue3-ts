
import http from "@/util/request";


export const userLogin = (data: LoginType) => http.post("/login", data);

export const userRegister = (data: any) => http.post("/register", data);
