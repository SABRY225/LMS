import axiosInstance from "./axiosInstance";

export const craeteCourse = async (newData) => {
  try {
    const response = await axiosInstance.post(`course/add-course`,newData);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const editCourse = async (courseId,newData) => {
    try {
      const response = await axiosInstance.put(`course/edit-course/${courseId}`,newData);
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

export const coursesData = async () => {
    try {
      const response = await axiosInstance.get(`course/courses/all`);
      return response.data;
    } catch (error) {
      return error;
    }
};

export const coursesByTeacher = async (teacherId) => {
  try {
    const response = await axiosInstance.get(`course/courses-by-teacher/${teacherId}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const coursesByStudent = async (studentId) => {
  try {
    const response = await axiosInstance.get(`course/courses-by-student/${studentId}`);
    return response.data;
  } catch (error) {
    return error;
  }
};