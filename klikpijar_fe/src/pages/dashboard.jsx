import "../components/dashboard/css/header.css";
import ReservasiTerbaru from "../components/dashboard/reservasiTerbaru";
import AkuPeduliTerbaru from "../components/dashboard/akuPeduliTerbaru";
import SkriningHIVTerbaru from "../components/dashboard/skriningHIVTerbaru";
import DataMasuk from "../components/dashboard/dataMasuk";
import Footer from "../components/footer";
import Header from "../components/header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <DataMasuk />
      <ReservasiTerbaru />
      <AkuPeduliTerbaru />
      <SkriningHIVTerbaru />
      <Footer />
    </>
  );
};

export default Dashboard;
