import axiosInstance from "./axiosInstance";

export const editEvaluation = async (courseId,newInfo) => {
  try {
    const response = await axiosInstance.put(`evaluation/${courseId}/edit-evaluation`,newInfo);
    return response.data;
  } catch (error) {
    return error;
  }
};