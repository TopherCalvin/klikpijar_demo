import axios from "axios";

export function api(token) {
  const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBsaWNhdGlvbl9pZCI6IjAyNmM1YWZkLTI2MGQtNGI5Mi04M2RiLTg2MDViZmMwMTAyYyIsImFwcGxpY2F0aW9uX2NvZGUiOiJBUFAwMDEiLCJhcHBsaWNhdGlvbl9uYW1lIjoiVXBkYXRlIFN0YXR1cyIsImNyZWF0ZWRfYXQiOiIyMDI0LTA1LTI3VDAwOjMxOjA5LjAwMFoiLCJpYXQiOjE3MTc3NzU0NjQsImV4cCI6MTcxNzg2MTg2NH0.5112XDP0rXLRmelYHyf8xPDO-JU8Z9rgdNXjxD65OF8`,
    },
  });
  return api;
}
