import axiosInstance from "./axiosInstance";

export const numberOfCourses = async () => {
  try {
    const response = await axiosInstance.get("landing/num-of-courses");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const numberOfStudents = async () => {
    try {
      const response = await axiosInstance.get("landing/num-of-students");
      return response.data;
    } catch (error) {
      return error;
    }
};

export const numberOfTeachers = async () => {
    try {
      const response = await axiosInstance.get("landing/num-of-teachers");
      return response.data;
    } catch (error) {
      return error;
    }
};