import axiosInstance from "./axiosInstance";

export const addStudent = async (newInfo) => {
  try {
    const response = await axiosInstance.post(`admin/add-student-in-course`,newInfo);
    return response.data;
  } catch (error) {
    return error;
  }
};