import axiosInstance from "./axiosInstance";

export const addStudent = async (credentials) => {
  try {
    const response = await axiosInstance.post(`admin/add-student-in-course`,credentials);
    return response.data;
  } catch (error) {
    return error;
  }
};