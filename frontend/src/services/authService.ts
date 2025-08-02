// src/services/authService.ts
import axiosClient from "../apis/axiosClient";

export const login = async (username: string, password: string) => {
  const res = await axiosClient.post("/auth/login", { username, password });
  return res.data; // contains: { token }
};
