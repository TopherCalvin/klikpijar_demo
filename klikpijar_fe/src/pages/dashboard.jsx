import ReservasiTerbaru from "../components/dashboard/reservasiTerbaru";
import AkuPeduliTerbaru from "../components/dashboard/akuPeduliTerbaru";
import SkriningHIVTerbaru from "../components/dashboard/skriningHIVTerbaru";
import DataMasuk from "../components/dashboard/dataMasuk";
import SideMenu from "../components/sideMenu";

const Dashboard = () => {
  return (
    <>
      <DataMasuk />
      <ReservasiTerbaru />
      <AkuPeduliTerbaru />
      <SkriningHIVTerbaru />
    </>
  );
};

export default Dashboard;
