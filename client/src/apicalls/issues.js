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
// issue a book
export const IssueBook = async (payload) => {
  try {
    return await apiRequest({
      method: "POST",
      endPoint: "/api/issues/issue-new-book",
      payload,
    });
  } catch (error) {
    throw error;
  }
};
// edit an issue
export const EditIssue = async (payload) => {
  try {
    return await apiRequest({
      method: "POST",
      endPoint: "/api/issues/edit-issue",
    });
  } catch (error) {
    throw error;
  }
};

export const ReturnBook = async (payload) => {
  try {
    return await apiRequest({
      method: "POST",
      endPoint: "/api/issues/return-book",
      payload,
    });
  } catch (error) {
    throw error;
  }
};

// delete an issue
export const DeleteIssue = async (payload) => {
  try {
    return await apiRequest({
      method: "POST",
      endPoint: "/api/issues/delete-issue",
      payload,
    });
  } catch (error) {
    throw error;
  }
};
