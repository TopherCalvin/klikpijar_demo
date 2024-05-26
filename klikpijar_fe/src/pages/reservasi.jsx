import { AddBox, ArrowDownward, Delete, Edit } from "@mui/icons-material";
import { MaterialReactTable } from "material-react-table";
import { useState } from "react";

const Data = [
  {
    id: 1,
    camCode: "Jon Snow",
    layanan: "Tes Hiv",
    janjiTemu: "Sendiri",
    age: 35,
    kelamin: "L",
    jadwal: "Rabu, 29-05-2024 08:45",
    UIC: "VINC010828",
    NIKBPJS: "3402162808010005",
    puskesmas: "Puskesmas Kec. Kebayoran Lama",
    hadir: "Menunggu",
    hasilTes: "",
    inisiasiARV: "",
    Antrian: 1,
    phone: "(665)121-5454",
    email: "cerseilannister@gmail.com",
    tanggalReservasi: "22-05-2024",
  },
  {
    id: 2,
    camCode: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    layanan: "Tes Hiv",
    janjiTemu: "Sendiri",
    kelamin: "L",
    jadwal: "Rabu, 29-05-2024 08:45",
    UIC: "VINC010828",
    NIKBPJS: "3402162808010005",
    puskesmas: "Puskesmas Kec. Kebayoran Lama",
    hadir: "Menunggu",
    hasilTes: "",
    inisiasiARV: "",
    Antrian: 1,
    tanggalReservasi: "22-05-2024",
    age: 42,
    phone: "(421)314-2288",
  },
  {
    id: 3,
    camCode: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    layanan: "Tes Hiv",
    janjiTemu: "Sendiri",
    kelamin: "L",
    jadwal: "Rabu, 29-05-2024 08:45",
    UIC: "VINC010828",
    NIKBPJS: "3402162808010005",
    puskesmas: "Puskesmas Kec. Kebayoran Lama",
    hadir: "Menunggu",
    hasilTes: "",
    inisiasiARV: "",
    Antrian: 1,
    tanggalReservasi: "22-05-2024",
    age: 45,
    phone: "(422)982-6739",
  },
  {
    id: 4,
    camCode: "Anya Stark",
    email: "anyastark@gmail.com",
    layanan: "Tes Hiv",
    janjiTemu: "Sendiri",
    kelamin: "L",
    jadwal: "Rabu, 29-05-2024 08:45",
    UIC: "VINC010828",
    NIKBPJS: "3402162808010005",
    puskesmas: "Puskesmas Kec. Kebayoran Lama",
    hadir: "Menunggu",
    hasilTes: "",
    inisiasiARV: "",
    Antrian: 1,
    tanggalReservasi: "22-05-2024",
    age: 16,
    phone: "(921)425-6742",
  },
  {
    id: 5,
    camCode: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    layanan: "Tes Hiv",
    janjiTemu: "Sendiri",
    kelamin: "L",
    jadwal: "Rabu, 29-05-2024 08:45",
    UIC: "VINC010828",
    NIKBPJS: "3402162808010005",
    puskesmas: "Puskesmas Kec. Kebayoran Lama",
    hadir: "Menunggu",
    hasilTes: "",
    inisiasiARV: "",
    Antrian: 1,
    tanggalReservasi: "22-05-2024",
  },
  {
    id: 6,
    camCode: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    layanan: "Tes Hiv",
    janjiTemu: "Sendiri",
    kelamin: "L",
    jadwal: "Rabu, 29-05-2024 08:45",
    UIC: "VINC010828",
    NIKBPJS: "3402162808010005",
    puskesmas: "Puskesmas Kec. Kebayoran Lama",
    hadir: "Menunggu",
    hasilTes: "",
    inisiasiARV: "",
    Antrian: 1,
    tanggalReservasi: "22-05-2024",
  },
  {
    id: 7,
    camCode: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    layanan: "Tes Hiv",
    janjiTemu: "Sendiri",
    kelamin: "L",
    jadwal: "Rabu, 29-05-2024 08:45",
    UIC: "VINC010828",
    NIKBPJS: "3402162808010005",
    puskesmas: "Puskesmas Kec. Kebayoran Lama",
    hadir: "Menunggu",
    hasilTes: "",
    inisiasiARV: "",
    Antrian: 1,
    tanggalReservasi: "22-05-2024",
  },
  {
    id: 8,
    camCode: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    layanan: "Tes Hiv",
    janjiTemu: "Sendiri",
    kelamin: "L",
    jadwal: "Rabu, 29-05-2024 08:45",
    UIC: "VINC010828",
    NIKBPJS: "3402162808010005",
    puskesmas: "Puskesmas Kec. Kebayoran Lama",
    hadir: "Menunggu",
    hasilTes: "",
    inisiasiARV: "",
    Antrian: 1,
    tanggalReservasi: "22-05-2024",
  },
  {
    id: 9,
    camCode: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    layanan: "Tes Hiv",
    janjiTemu: "Sendiri",
    kelamin: "L",
    jadwal: "Rabu, 29-05-2024 08:45",
    UIC: "VINC010828",
    NIKBPJS: "3402162808010005",
    puskesmas: "Puskesmas Kec. Kebayoran Lama",
    hadir: "Menunggu",
    hasilTes: "",
    inisiasiARV: "",
    Antrian: 1,
    tanggalReservasi: "22-05-2024",
  },
];

const Reservasi = () => {
  const [mockDataReservasi, setMockDataReservasi] = useState(Data);
  const [rowSelection, setRowSelection] = useState({});

  const handleCreateReservation = () => {
    // Create new reservation logic
    console.log("Create new reservation");
  };

  const handleEditReservation = () => {
    // Edit selected reservation logic
    console.log("Edit selected reservation:", rowSelection);
  };

  const handleDeleteReservation = () => {
    // Delete selected reservation logic
    console.log("Delete selected reservation:", rowSelection);
    console.log(Object.keys(rowSelection));
  };

  const columns = [
    // your columns
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <button onClick={handleCreateReservation}>Create Reservation</button>
      </div>
      <MaterialReactTable
        title="Reservasi"
        data={mockDataReservasi}
        columns={[
          { accessorKey: "id", header: "No.", type: "numeric" },
          { accessorKey: "camCode", header: "Cam Code" },
          { accessorKey: "layanan", header: "Layanan Yang Dipilih" },
          { accessorKey: "janjiTemu", header: "Janji Temu Untuk" },
          { accessorKey: "age", header: "Umur", type: "numeric" },
          {
            accessorKey: "kelamin",
            header: "Mengidentifikasi dirinya sebagai",
          },
          { accessorKey: "jadwal", header: "Jadwal Reservasi" },
          { accessorKey: "UIC", header: "UIC" },
          { accessorKey: "NIKBPJS", header: "NIK/BPJS" },
          { accessorKey: "Antrian", header: "No. Antri", type: "numeric" },
          { accessorKey: "puskesmas", header: "Puskesmas" },
          { accessorKey: "hadir", header: "Hadir" },
          { accessorKey: "hasilTes", header: "Hasil Tes" },
          { accessorKey: "inisiasiARV", header: "Inisiasi ARV" },
          { accessorKey: "phone", header: "HP/WA" },
          { accessorKey: "email", header: "Email" },
          {
            accessorKey: "tanggalReservasi",
            header: "Tanggal submit Reservasi",
          },
        ]}
        state={{
          showSelectAllCheckbox: true,
          showSelectColumnCheckboxes: true,
          rowSelection,
        }}
        enableRowSelection
        getRowId={(row) => row.userId} //give each row a more useful id
        onRowSelectionChange={setRowSelection} //connect internal row selection state to your own
        muiToolbarAlertBannerProps={
          rowSelection
            ? {
                color: "primary",
                children: (
                  <div>
                    {Object.keys(rowSelection).length < 2 && (
                      <button onClick={handleEditReservation}>
                        <Edit /> Edit
                      </button>
                    )}
                    <button onClick={handleDeleteReservation}>
                      <Delete /> Delete
                    </button>
                  </div>
                ),
              }
            : undefined
        }
        icons={{
          Add: AddBox,
          ArrowDownward: ArrowDownward,
          Edit: Edit,
          Delete: Delete,
        }}
        options={{
          filtering: true,
          selection: true,
        }}
      />
    </>
  );
};

export default Reservasi;
