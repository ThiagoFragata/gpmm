import { getSession } from "next-auth/react";
import axios, { type AxiosInstance } from "axios";
import { PATHS } from "@/_utils/constants";

export function ApiToken(): AxiosInstance {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
  });
  instance.interceptors.request.use(async request => {
    const session = await getSession();
    if (session !== null) {
      request.headers.Authorization = `Bearer ${session?.accessToken}`;
    } else {
      window.location.href = PATHS.login;
    }
    return request;
  });
  instance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return Promise.reject(error);
    }
  );

  return instance;
}

export const apiPublic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
});
