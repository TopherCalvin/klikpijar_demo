import axios from "axios";

export function api() {
  const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
  });
  return api;
}
