// api/commentApi.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; 

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Important for sending cookies
});

// Fetch comments for a specific post
export const fetchComments = async (targetId, targetType = 'Post') => {
  try {
    const response = await api.get('/comment', {
      params: {
        targetId,
        targetType
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};

// Create a new comment
export const createComment = async (content, targetId, targetType = 'Post') => {
  try {
    const response = await api.post('/comment/create', {
      content,
      targetId,
      targetType
    });
    return response.data;
  } catch (error) {
    console.error('Error creating comment:', error);
    throw error;
  }
};

// Delete a comment
export const deleteComment = async (commentId) => {
  try {
    const response = await api.delete(`/comment/delete/${commentId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting comment:', error);
    throw error;
  }
};

export default {
  fetchComments,
  createComment,
  deleteComment
};