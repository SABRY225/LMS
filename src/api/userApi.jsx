import axiosInstance from "./axiosInstance";

export const currentUser = async (token) => {
  try {
    const response = await axiosInstance.get("user",{headers:{"Authorization": `Bearer ${token}`,"Content-Type" : "application/json"}});
    return response.data;
  } catch (error) {
    return error;
  }
};

export const editInfo = async (userId,newDate) => {
    try {
      const response = await axiosInstance.put(`user/edit-user/${userId}`,newDate);
      return response.data;
    } catch (error) {
      return error;
    }
};

export const deleteUser = async (userId) => {
    try {
      const response = await axiosInstance.delete(`user/delete-user/${userId}`);
      return response.data;
    } catch (error) {
      return error;
    }
};

export const usersData = async () => {
    try {
      const response = await axiosInstance.get(`user/users/`);
      return response.data;
    } catch (error) {
      return error;
    }
};