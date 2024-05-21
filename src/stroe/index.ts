import { defineStore } from "pinia";
import { userLogin } from "@/api/auth_userapi";
import router from "@/router";

export const useUserStore = defineStore("auth", {
  state: () => ({
    user: {},
    componentPath: "",
  }),
  getters: {
    getUser: (state) => state.user,
    getComponentPath: (state) => state.componentPath,
  },
  actions: {
    setComponentPath(path: string) {
      this.componentPath = path;
    },
    Login(data: LoginType) {
      router.push("/");
      userLogin(data).then(
        (res) => {
          this.user = res.data.user;
          localStorage.setItem("token", res.data.token);
          router.push("/home");
        },
        (err) => {
          console.log(err.message);
        },
      );
    },
  },
});
