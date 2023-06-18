import { type ApiTokenData } from "@/_types/Common";
import axios from "axios";
import { getSession } from "next-auth/react";
import { parseCookies } from "nookies";

export const baseAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
});

export const setToken = (token: string): void => {
  baseAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const cookie = parseCookies();
// const isValidDateCookie =
//   cookie["42auth-nextts"] !== undefined &&
//   typeof cookie["42auth-nextts"] === "string";
// const data = isValidDateCookie ? JSON.parse(cookie["42auth-nextts"]) : "";
// const _data = data as { jwt: string };

export async function apiToken(): Promise<ApiTokenData> {
  const session = await getSession();
  if (session !== null) {
    const jwt = session?.accessToken;
    return {
      headers: {
        Authorization: `Bearer ${jwt ?? "WITHOUT_TOKEN"}`
      }
    };
  }
  return {
    headers: {
      Authorization: `Bearer "WITHOUT_TOKEN`
    }
  };
}
