import axiosInstance from "./axiosInstance";

export const craeteExam = async (courseId,newDate) => {
  try {
    const response = await axiosInstance.post(`exam/add-exam/${courseId}/add-exam`,newDate);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const editExam= async (examId,newDate) => {
    try {
      const response = await axiosInstance.put(`exam/edit-exam/${examId}`,newDate);
      return response.data;
    } catch (error) {
      return error;
    }
  };

export const deleteExam = async (examId) => {
    try {
      const response = await axiosInstance.delete(`exam/delete-exam/${examId}`);
      return response.data;
    } catch (error) {
      return error;
    }
};

export const examInfo = async (examId) => {
    try {
      const response = await axiosInstance.get(`exam/${examId}`);
      return response.data;
    } catch (error) {
      return error;
    }
  };

export const examData = async () => {
    try {
      const response = await axiosInstance.get(`exam/exams/all`);
      return response.data;
    } catch (error) {
      return error;
    }
};

export const editResult = async (examId) => {
    try {
      const response = await axiosInstance.put(`exam/edit-result/${examId}`);
      return response.data;
    } catch (error) {
      return error;
    }
};