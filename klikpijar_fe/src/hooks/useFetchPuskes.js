import { useEffect, useState } from "react";
import { api } from "../api/api";

const init = {
  limit: 5,
  page: 1,
  q: "",
};

export const useFetchPuskes = () => {
  const [puskesFilter, setPuskesFilter] = useState(init);
  const [pagination, setPagination] = useState({
    pageIndex: puskesFilter.page - 1,
    pageSize: puskesFilter.limit,
  });
  const [puskes, setPuskes] = useState([]);
  const [total, setTotal] = useState(0);

  const handlePuskesFilterChange = (event) => {
    if (event.target?.name) {
      setPuskesFilter((prevFilter) => ({
        ...prevFilter,
        [event.target.name]: event.target.value,
      }));
    } else {
      setPuskesFilter(init);
    }
  };

  const fetch = async () => {
    try {
      const res = await api().get(`/clinics`, {
        params: puskesFilter,
      });
      console.log(res.data);
      setPuskes(res.data.data);
      setTotal(res.data.total_record);
    } catch (err) {
      console.log(err?.response?.data);
    }
  };

  useEffect(() => {
    setPuskesFilter((prevFilter) => ({
      ...prevFilter,
      limit: pagination.pageSize,
      page: pagination.pageIndex + 1,
    }));
  }, [pagination]);

  useEffect(() => {
    fetch();
  }, [puskesFilter]);

  return {
    puskes,
    puskesFilter,
    pagination,
    setPagination,
    total,
    fetch,
    handlePuskesFilterChange,
  };
};
