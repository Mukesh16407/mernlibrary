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

// get all users
export const GetAllUsers = async (role) => {
  try {
    return await apiRequest({
      method: "GET",
      endPoint: `/api/users/get-all-users/${role}`,
    });
  } catch (error) {
    throw error;
  }
};

export const GetUserById = async (id) => {
  try {
    return await apiRequest({
      method: "GET",
      endPoint: `/api/users/get-user-by-id/${id}`,
    });
  } catch (error) {
    throw error;
  }
};
