import axiosInstance from "./axiosInstance";

export const craeteLecture = async (courseId,newData) => {
  try {
    const response = await axiosInstance.post(`lecture/${courseId}/add-lecture`,newData);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const editLecture = async (lectureId,newData) => {
    try {
      const response = await axiosInstance.put(`lecture/edit-lecture/${lectureId}`,newData);
      return response.data;
    } catch (error) {
      return error;
    }
};

export const deleteLecture = async (lectureId) => {
    try {
      const response = await axiosInstance.delete(`lecture/delete-lecture/${lectureId}`);
      return response.data;
    } catch (error) {
      return error;
    }
};

export const lectureInfo = async (lectureId) => {
    try {
      const response = await axiosInstance.get(`lecture/${lectureId}`);
      return response.data;
    } catch (error) {
      return error;
    }
};

export const lecturesData = async () => {
    try {
      const response = await axiosInstance.get(`lecture/lectures/all`);
      return response.data;
    } catch (error) {
      return error;
    }
};