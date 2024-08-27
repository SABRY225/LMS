import axiosInstance from "./axiosInstance";

export const craeteLecture = async (courseId,newData,token) => {
  try {
    const response = await axiosInstance.post(`lecture/${courseId}/add-lecture`,newData,{headers:{"Authorization": `Bearer ${token}`,"Content-Type" : "application/json"}});
    return response.data;
  } catch (error) {
    return error;
  }
};

export const editLecture = async (newData,lectureId) => {
    try {
      const response = await axiosInstance.put(`lecture/edit-lecture/${lectureId}`,newData,{headers:{"Authorization": `Bearer ${localStorage.getItem('token')}`,"Content-Type" : "application/json"}});
      return response.data;
    } catch (error) {
      return error;
    }
};

export const deleteLecture = async (lectureId,token) => {
    try {
      const response = await axiosInstance.delete(`lecture/delete-lecture/${lectureId}`,{headers:{"Authorization": `Bearer ${token}`,"Content-Type" : "application/json"}});
      return response.data;
    } catch (error) {
      return error;
    }
};

export const lectureInfo = async (lectureId) => {
    try {
      const response = await axiosInstance.get(`lecture/${lectureId}`,{headers:{"Authorization": `Bearer ${localStorage.getItem('token')}`,"Content-Type" : "application/json"}});
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

export const getLecturesByTeacher = async (teacherId) => {
  try {
    const response = await axiosInstance.get(`lecture/lecturesbyteacer/${teacherId.teacherId}`,{headers:{"Authorization": `Bearer ${teacherId.token}`,"Content-Type" : "application/json"}});
    return response.data;
  } catch (error) {
    return error;
  }
};