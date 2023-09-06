import { instance } from "./instans";

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  getUsers2(p, pageSize) {
    return instance
      .get(`users?page=${p}&count=${pageSize}`)
      .then((response) => response.data);
  },
  unFollow(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
  follow(id) {
    return instance
      .post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {})
      .then((response) => response.data);
  },
};
