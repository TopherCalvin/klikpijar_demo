import axios from "axios";

export function api() {
  const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBsaWNhdGlvbl9pZCI6IjAyNmM1YWZkLTI2MGQtNGI5Mi04M2RiLTg2MDViZmMwMTAyYyIsImFwcGxpY2F0aW9uX2NvZGUiOiJBUFAwMDEiLCJhcHBsaWNhdGlvbl9uYW1lIjoiVXBkYXRlIFN0YXR1cyIsImNyZWF0ZWRfYXQiOiIyMDI0LTA1LTI3VDAwOjMxOjA5LjAwMFoiLCJpYXQiOjE3MTc2ODg1ODUsImV4cCI6MTcxNzc3NDk4NX0.gAfGDBtcKSn7qKY5VgRUH08HAvuM48Glz_PQehIzH_U`,
    },
  });
  return api;
}
