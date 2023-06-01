import axios from "axios";

export const baseAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb211bmljYWNhb2ludGVybmFAZ21haWwuY29tIiwiZXhwIjoxNjg1NjU2NTQxfQ.keLK7wR9ZfINC0FRgs4Kh1ABIBsPBPXTY0lzqlthvieIP8HGBe-hWCJHZeVwf3SxXjqbuQN15YURQ__EPCeRyA"
  }
});
