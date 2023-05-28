import apiRequest from "./axiosInstance";

// get all books
export const GetAllBooks = async () => {
  try {
    return await apiRequest({
      method: "GET",
      endPoint: "api/books/get-all-books",
    });
  } catch (error) {
    throw error;
  }
};
