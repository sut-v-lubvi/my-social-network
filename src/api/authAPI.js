import { instance } from "./instans";

export const authAPI = {
  getAuthData() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
  login(data) {
    return instance.post(`auth/login`, {
      email: data.Login,
      password: data.Password,
      rememberMe: data.rememberMe,
    });
  },
  unLogin() {
    return instance.delete(`auth/login`);
  },
};
