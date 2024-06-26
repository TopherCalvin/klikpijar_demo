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
  const [total, setTotal] = useState(0);
  const [puskes, setPuskes] = useState([]);
  const [puskesData, setPuskesData] = useState({
    address_desc: "",
    code: "",
    email: "",
    name: "",
    phone_num: "",
    province_kode: "",
    regency_kode: "",
  });

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

  const fetchPuskes = async () => {
    try {
      const res = await api().get(`/clinics`, {
        params: puskesFilter,
      });
      setPuskes(res.data.data);
      setTotal(res.data.total_record);
    } catch (err) {
      console.log(err?.response?.data);
    }
  };

  const fetchPuskesByID = async (puskesId) => {
    try {
      if (puskesId) {
        const res = await api().get(`/clinics/` + puskesId);
        console.log(res.data.data);
        setPuskesData(res.data.data);
      } else {
        setPuskesData({
          address_desc: "",
          code: "",
          email: "",
          name: "",
          phone_num: "",
          province_kode: "",
          regency_kode: "",
        });
      }
    } catch (err) {
      console.log(err?.response?.data);
    }
  };

  const createPuskes = async (body) => {
    try {
      const res = await api().post(`/clinics`, body);
      fetchPuskes();
    } catch (err) {
      console.log(err?.response?.data);
    }
  };

  const deletePuskesByID = async (setOpenErrorModal, deleteModal) => {
    try {
      if (puskesData.clinic?.id) {
        const res = await api().delete(`/clinics/` + puskesData.id);
        fetchPuskes();
        deleteModal();
      } else {
        setOpenErrorModal(true);
      }
    } catch (err) {
      setOpenErrorModal(true);
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
    fetchPuskes();
  }, [puskesFilter]);

  return {
    puskes,
    puskesFilter,
    pagination,
    setPagination,
    total,
    handlePuskesFilterChange,
    createPuskes,
    deletePuskesByID,
    puskesData,
    fetchPuskesByID,
    fetchPuskes,
  };
};
