import apiRequest from "./axiosInstance";

// add book
export const AddBook = async (payload) => {
  debugger;
  try {
    return await apiRequest({
      method: "POST",
      endPoint: "/api/books/add-book",
      payload,
    });
  } catch (error) {
    throw error;
  }
};
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

// update book
export const UpdateBook = async (payload) => {
  try {
    return await apiRequest({
      method: "PUT",
      endPoint: `/api/books/update-book/${payload._id}`,
      payload,
    });
  } catch (error) {
    throw error;
  }
};
// delete book
export const DeleteBook = async (id) => {
  try {
    return await apiRequest({
      method: "DELETE",
      endPoint: `/api/books/delete-book/${id}`,
    });
  } catch (error) {
    throw error;
  }
};
