import { useEffect, useState } from "react";
import { api } from "../api/api";

export const useFetchProvince = () => {
  const [provinces, setProvinces] = useState([]);
  const fetch = async () => {
    try {
      const res = await api().get(`/provinces`);
      setProvinces(res.data.data);
    } catch (err) {
      console.log(err?.response?.data);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return { provinces, fetch };
};
