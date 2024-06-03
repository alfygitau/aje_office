import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface Auth {
  user: {
    accessToken: string;
  };
}

function httpClient(baseURL: string): AxiosInstance {
  const baseClient = axios.create({
    baseURL,
    timeout: 10000,
  });

  baseClient.interceptors.request.use((request: AxiosRequestConfig) => {
    const storedAuth = localStorage.getItem('auth');
    if (!storedAuth) {
      return request;
    }

    const auth: Auth = JSON.parse(storedAuth);
    const accessToken = auth?.user?.accessToken || '';

    return {
      ...request,
      headers: {
        ...request.headers,
        ...(accessToken && { Authorization: `bearer ${accessToken}` }),
      },
    };
  });

  return baseClient;
}

export const client: AxiosInstance = httpClient('http://173.249.5.15:8085/StarBetBO');
