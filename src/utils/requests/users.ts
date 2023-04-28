import { appAxios } from "@/config/axios";

export const getUsers = async () => {
  return await appAxios.get("/users");
};

export const getUserById = async (id: string) => {
  return await appAxios.get(`/users/${id}`);
};
