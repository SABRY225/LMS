import axiosInstance from "./axiosInstance";

export const craeteExam = async (courseId,newDate) => {
  try {
    const response = await axiosInstance.post(`exam/${courseId}/add-exam`,newDate,{headers:{"Authorization": `Bearer ${localStorage.getItem('token')}`,"Content-Type" : "application/json"}});
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
      const response = await axiosInstance.delete(`exam/delete-exam/${examId}`,{headers:{"Authorization": `Bearer ${localStorage.getItem('token')}`,"Content-Type" : "application/json"}});
      console.log(response);
      
      return response.data;
    } catch (error) {
      return error;
    }
};

export const examInfo = async (examId) => {
    try {
      const response = await axiosInstance.get(`exam/${examId}`,{headers:{"Authorization": `Bearer ${localStorage.getItem('token')}`,"Content-Type" : "application/json"}});
      return response.data;
    } catch (error) {
      return error;
    }
};

export const examData = async (courseId) => {
    try {
      const response = await axiosInstance.get(`exam/exams/${courseId}`,{headers:{"Authorization": `Bearer ${localStorage.getItem('token')}`,"Content-Type" : "application/json"}});
      return response.data;
    } catch (error) {
      return error;
    }
};

export const getExamByTeacher = async (teacherId) => {
  try {
    const response = await axiosInstance.get(`exam/examsbyteacher/${teacherId}`,{headers:{"Authorization": `Bearer ${localStorage.getItem('token')}`,"Content-Type" : "application/json"}});
    return response.data;
  } catch (error) {
    return error;
  }
};

export const editResult = async (resultId) => {
    try {
      const response = await axiosInstance.put(`exam/edit-result/${resultId}`);
      return response.data;
    } catch (error) {
      return error;
    }
};


export const addResult = async (examId) => {
  try {
    const response = await axiosInstance.post(`exam/add-result/${examId}`);
    return response.data;
  } catch (error) {
    return error;
  }
};