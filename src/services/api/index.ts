import axios from "axios";

export const baseAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb3NpdmFuY2FyZG9zbzc2N0BnbWFpbC5jb20iLCJleHAiOjE2ODU4NDYxMjB9.ouufebsU1AKYxh2LDVjS7SQ3buaB2J1So_bre8SRBfo-aMtO0pWG1QaeZkbcBUxPbU8EfKMt9pBc1cnYRnV0ew"
  }
});

export const setToken = (token: string): void => {
  baseAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};
