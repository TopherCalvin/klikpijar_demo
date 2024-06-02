import { useEffect, useState } from "react";
import { api } from "../api/api";

export const useFetchUsers = () => {
  const [puskes, setPuskes] = useState([]);
  const fetch = async () => {
    try {
      const res = await api().get(`/clinics`);
      setPuskes(res.data);
    } catch (err) {
      console.log(err?.response?.data);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return { puskes, fetch };
};
