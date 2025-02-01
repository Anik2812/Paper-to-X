import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await api.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const generateOutput = async (outputType: string, fileId: string, options: any = {}) => {
  const response = await api.post(`/generate/${outputType}`, {
    file_id: fileId,
    options,
  });
  return response.data;
};

export const getStatus = async (fileId: string) => {
  const response = await api.get(`/status/${fileId}`);
  return response.data;
};