import { getSession } from "next-auth/react";
import axios, { type AxiosInstance, type AxiosAdapter } from "axios";

export function ApiToken(): AxiosInstance {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
  });
  instance.interceptors.request.use(async request => {
    const session = await getSession();
    if (session != null) {
      request.headers.Authorization = `Bearer ${session?.accessToken}`;
    }
    return request;
  });
  instance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      console.log(`error`, error);
    }
  );

  return instance;
}
