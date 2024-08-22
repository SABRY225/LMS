import axiosInstance from "./axiosInstance";

export const craeteBook = async (courseId,newData) => {
  try {
    const response = await axiosInstance.post(`book/${courseId}/add-book`,newData);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const editBook = async (bookId,newData) => {
    try {
      const response = await axiosInstance.put(`book/edit-book/${bookId}`,newData);
      return response.data;
    } catch (error) {
      return error;
    }
  };

export const deletebook = async (bookId) => {
    try {
      const response = await axiosInstance.delete(`book/delete-book/${bookId}`);
      return response.data;
    } catch (error) {
      return error;
    }
};

export const bookInfo = async (bookId) => {
    try {
      const response = await axiosInstance.get(`book/${bookId}`);
      return response.data;
    } catch (error) {
      return error;
    }
  };

export const booksData = async () => {
    try {
      const response = await axiosInstance.get(`book/books/all`);
      return response.data;
    } catch (error) {
      return error;
    }
  };