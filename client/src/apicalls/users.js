import apiRequest from "./axiosInstance";

export const RegisterUser = async (payload) => {
  return await apiRequest({
    method: "POST",
    endPoint: "/api/users/register",
    payload,
  });
};
// login a user
export const LoginUser = async (payload) => {
  try {
    return await apiRequest({
      method: "POST",
      endPoint: "/api/users/login",
      payload,
    });
  } catch (error) {
    throw error;
  }
};
