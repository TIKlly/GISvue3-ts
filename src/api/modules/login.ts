import http from "@/util/request";

export const logoutApi = () => http.post("/logout", {});
