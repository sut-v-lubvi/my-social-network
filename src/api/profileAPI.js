import { instance } from "./instans";

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
  getStatus(userId) {
    return instance.get(`/profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`/profile/status/`, { status });
  },
};
