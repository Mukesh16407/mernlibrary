import apiRequest from "./axiosInstance";

export const GetReports = async () => {
  try {
    return await apiRequest({
      method: "GET",
      endPoint: "/api/reports/get-reports",
    });
  } catch (error) {
    console.log(error);
  }
};
