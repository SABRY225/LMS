import axiosInstance from "./axiosInstance";

export const craeteCourse = async (formData,token) => {
  try {
    const response = await axiosInstance.post(`course/add-course`,formData,{headers:{"Authorization": `Bearer ${token}`,"Content-Type" : "application/json"}});
    return response.data;
  } catch (error) {
    return error;
  }
};

export const editCourse = async (courseId,newData) => {
    try {
      const response = await axiosInstance.put(`course/edit-course/${courseId}`,newData,{headers:{"Authorization": `Bearer ${localStorage.getItem('token')}`,"Content-Type" : "application/json"}});
      return response.data;
    } catch (error) {
      return error;
    }
  };

export const deleteCourse = async (courseId,token) => {
    try {
      const response = await axiosInstance.delete(`course/delete-course/${courseId}`,{headers:{"Authorization": `Bearer ${token}`,"Content-Type" : "application/json"}});
      return response.data;
    } catch (error) {
      return error;
    }
};

export const courseInfo = async (courseId) => {
    try {
      const response = await axiosInstance.get(`course/${courseId}`,{headers:{"Authorization": `Bearer ${localStorage.getItem('token')}`,"Content-Type" : "application/json"}});
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

export const coursesByTeacher = async (teacherId,token) => {
  try {
    const response = await axiosInstance.get(`course/courses-by-teacher/${teacherId}`,{headers:{"Authorization": `Bearer ${token}`,"Content-Type" : "application/json"}});
    return response.data;
  } catch (error) {
    return error;
  }
};
export const coursesByStudent = async (studentId,token) => {
  try {
    const response = await axiosInstance.get(`course/courses-by-student/${studentId}`,{headers:{"Authorization": `Bearer ${token}`,"Content-Type" : "application/json"}});
    return response.data;
  } catch (error) {
    return error;
  }
};