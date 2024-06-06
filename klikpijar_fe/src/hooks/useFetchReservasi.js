import { useEffect, useState } from "react";
import { api } from "../api/api";
import moment from "moment";

const init = {
  limit: 5,
  page: 1,
  q: "",
};

export const useFetchReservasi = () => {
  const [reserveFilter, setReserveFilter] = useState(init);
  const [pagination, setPagination] = useState({
    pageIndex: reserveFilter.page - 1,
    pageSize: reserveFilter.limit,
  });
  const [reservasi, setReservasi] = useState([]);
  const [total, setTotal] = useState(0);

  const handleReserveFilterChange = (event) => {
    if (event.target?.name) {
      setReserveFilter((prevFilter) => ({
        ...prevFilter,
        [event.target.name]: event.target.value,
      }));
    } else {
      setReserveFilter(init);
    }
  };

  const fetch = async () => {
    try {
      const res = await api().get(`/reservations`, {
        params: reserveFilter,
      });
      console.log(res.data);
      setReservasi(
        res.data?.data?.map((val, idx) => {
          return {
            No:
              (pagination.pageIndex + 1) * pagination.pageSize +
              1 -
              pagination.pageSize +
              idx,
            ...val,
            res_created_date: moment(val.res_created_date).format("DD-MM-YYYY"),
          };
        })
      );
      setTotal(res.data.total_record);
    } catch (err) {
      console.log(err?.response?.data);
    }
  };

  useEffect(() => {
    setReserveFilter((prevFilter) => ({
      ...prevFilter,
      limit: pagination.pageSize,
      page: pagination.pageIndex + 1,
    }));
  }, [pagination]);

  useEffect(() => {
    fetch();
  }, [reserveFilter]);

  return {
    reservasi,
    reserveFilter,
    pagination,
    setPagination,
    total,
    fetch,
    handleReserveFilterChange,
  };
};
