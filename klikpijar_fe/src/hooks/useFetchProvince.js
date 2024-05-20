import { useEffect, useState } from "react";
import { api } from "../api/api";

export const useFetchProvince = () => {
  const [province, setProvince] = useState([]);
  const fetch = async () => {
    try {
      const res = await api().get(`/province?sort=createdAt`);
      setProvince(res.data);
    } catch (err) {
      console.log(err?.response?.data);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return { province, fetch };
};
