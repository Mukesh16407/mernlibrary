import apiRequest from "./axiosInstance";

// get issues
export const GetIssues = async (payload) => {
  try {
    return await apiRequest({
      method: "POST",
      endPoint: "/api/issues/get-issues",
      payload,
    });
  } catch (error) {
    throw error;
  }
};
