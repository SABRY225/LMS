import axiosInstance from "./axiosInstance";

export const craeteCourse = async (newInfo) => {
  try {
    const response = await axiosInstance.post(`course/add-course`,newInfo);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const editCourse = async (courseId,newInfo) => {
    try {
      const response = await axiosInstance.put(`course/edit-course/${courseId}`,newInfo);
      return response.data;
    } catch (error) {
      return error;
    }
  };

export const deleteCourse = async (courseId) => {
    try {
      const response = await axiosInstance.delete(`course/delete-course/${courseId}`);
      return response.data;
    } catch (error) {
      return error;
    }
};

export const courseInfo = async (courseId) => {
    try {
      const response = await axiosInstance.get(`course/${courseId}`);
      return response.data;
    } catch (error) {
      return error;
    }
  };

export const courseData = async () => {
    try {
      const response = await axiosInstance.get(`course/courses/all`);
      return response.data;
    } catch (error) {
      return error;
    }
  };