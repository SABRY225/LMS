import axiosInstance from "./axiosInstance";

export const addStudent = async (formData,token) => {
  try {
    const response = await axiosInstance.post(`admin/add-student-in-course`,formData,{headers:{"Authorization": `Bearer ${token}`,"Content-Type" : "application/json"}});
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};