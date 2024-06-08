import { useEffect, useState } from "react";
import { api } from "../api/api";

export const useFetchKabupaten = () => {
  const [regencies, setRegencies] = useState([]);
  const fetch = async () => {
    try {
      const res = await api().get(`/provinces`);
      setRegencies(res.data.data);
    } catch (err) {
      console.log(err?.response?.data);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return { regencies, fetch };
};
