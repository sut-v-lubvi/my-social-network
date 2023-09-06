import axios from "axios";

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "2dc2bc3d-3300-420c-841e-4bcbdc3f63e8",
  },
});
