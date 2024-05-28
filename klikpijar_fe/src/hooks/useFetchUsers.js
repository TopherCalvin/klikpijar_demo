import { useEffect, useState } from "react";
import { api } from "../api/api";

export const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const fetch = async () => {
    try {
      const res = await api().get(`/users`);
      setUsers(res.data);
    } catch (err) {
      console.log(err?.response?.data);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return { users, fetch };
};
