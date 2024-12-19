import React, { useState, useEffect } from "react";
import api from "../config/api";
import {
  PencilIcon,
  TrashIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
} from "lucide-react";
import axios from "axios";

const Dashboard = () => {
  const [destinations, setDestinations] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDestinasi = async () => {
      try {
        const response = await fetch(`${api}/destinasi`);
        const data = await response.json();
        setDestinations(Array.isArray(data.data) ? data.data : []);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchDestinasi();
  }, []);

  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    if (isDeleted) {
      window.location.reload();
      setIsDeleted(false); // Reset state setelah reload
    }
  }, [isDeleted]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${api}/destinasi/${id}`, {
        method: "PUT",
        credentials: "include",
      });

      if (response.ok) {
        alert("Destinasi berhasil dihapus");
        setIsDeleted(true); // Trigger reload
      } else {
        alert("Gagal menghapus destinasi");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      alert("Gagal menghapus destinasi");
    }
  };

  // const destinations = [
  //   { id: "00001", destinasi: "Taman Nasional Siberut", alamat: "089 Kutch Green Apt. 448" },
  //   { id: "00002", destinasi: "Pulau Sipora", alamat: "978 Immanuel Ferry Su" },
  //   { id: "00003", destinasi: "Pulau Awera", alamat: "8587 Hoda Ports" },
  //   { id: "00004", destinasi: "Hutan Mangrove Taman Nasional", alamat: "788 Destiny Lake Suite 500" },
  //   { id: "00005", destinasi: "Trekking Taman Nasional", alamat: "042 Mylene Throughway" },
  //   { id: "00006", destinasi: "Air Terjun Kulukubuk", alamat: "543 Weimann Mountain" },
  //   { id: "00007", destinasi: "Danau Bua Olnan", alamat: "New Scottieberg" },
  //   { id: "00008", destinasi: "Desa Wisata Muntei", alamat: "New Jon" },
  //   { id: "00009", destinasi: "Air Terjun Bot Soumang", alamat: "124 Lylo Forge Suite 975" },
  // ];

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        height: "100%",
        width: "100%",
        display: "flex",
        background: "whitesmoke",
      }}
    >
      <div
        style={{
          width: "15%",
          height: "100%",
          background: "blue",
          background: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{ padding: "20px", textAlign: "center", marginBottom: "10px" }}
        >
          <img src="/admin-icon.webp" style={{ height: "45px" }} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div>
            <a href="/admin" style={{ textDecoration: "none", color: "black" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  borderLeft: "5px solid white",
                  marginBottom: "3px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    padding: "10px",
                    width: "85%",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src="/dashboard_black_icon.png"
                    style={{ width: "24px" }}
                  />
                  <div>Dashboard</div>
                </div>
              </div>
            </a>
            <a
              href="/admin/destination"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  borderLeft: "5px solid #084360",
                  marginBottom: "3px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    background: "#084360",
                    alignItems: "center",
                    padding: "10px",
                    width: "85%",
                    borderRadius: "10px",
                    color: "white",
                  }}
                >
                  <img
                    src="/destination_white_icon.png"
                    style={{ width: "24px" }}
                  />
                  <div>Destinasi</div>
                </div>
              </div>
            </a>
            <a
              href="/admin/artikel"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  borderLeft: "5px solid white",
                  marginBottom: "3px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    padding: "10px",
                    width: "85%",
                    borderRadius: "10px",
                  }}
                >
                  <img src="/artikel.png" style={{ width: "24px" }} />
                  <div>Artikel</div>
                </div>
              </div>
            </a>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                borderLeft: "5px solid white",
                marginBottom: "3px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  padding: "10px",
                  width: "85%",
                  borderRadius: "10px",
                }}
              >
                <img src="/pengaturan.png" style={{ width: "24px" }} />
                <div>Pengaturan</div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                borderLeft: "5px solid white",
                marginBottom: "3px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  padding: "10px",
                  width: "85%",
                  borderRadius: "10px",
                }}
              >
                <img src="/logout.png" style={{ width: "24px" }} />
                <div>Keluar</div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                borderLeft: "5px solid white",
                marginBottom: "3px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  padding: "10px",
                  width: "85%",
                  borderRadius: "10px",
                  fontSize: "12px",
                }}
              >
                <div>© Arunasita Team 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "blue",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "84px",
            background: "white",
            display: "flex",
            padding: "0 40px",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "30%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              placeholder="Cari..."
              style={{ borderRadius: "30px 0 0 30px", borderRight: "0" }}
            />
            <div
              style={{
                border: "1px solid gainsboro",
                padding: "9px 15px",
                borderLeft: "0",
                borderRadius: "0 30px 30px 0",
              }}
            >
              <img src="/findicon.png" style={{ width: "24px" }} />
            </div>
          </div>
          <div class="d-flex gap-4 align-items-center">
            <div>
              <img src="/notification.webp" style={{ width: "24px" }} />
            </div>
            <div class="d-flex gap-2 align-items-center">
              <div>
                <img src="/profile.webp" style={{ width: "32px" }} />
              </div>
              <div style={{ marginRight: "10px" }}>
                <div>
                  <b>Arunasita</b>
                </div>
                <div style={{ fontSize: "11px" }}>Admin</div>
              </div>
              <div>
                <img src="/arrow_down.webp" style={{ width: "24px" }} />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "whitesmoke",
            overflow: "auto",
            padding: "40px",
          }}
        >
          <div className="p-6 max-w-6xl mx-auto">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h1 className="text-2xl font-bold">Daftar Destinasi</h1>
              <a
                href="/admin/destination/add"
                style={{ textDecoration: "none" }}
              >
                <button
                  className="bg-teal-500 text-white px-4 py-2 rounded-md d-flex align-items-center gap-2"
                  style={{
                    background: "#21A4AC",
                    borderColor: "#21A4AC",
                    boxShadow: "none",
                  }}
                >
                  <PlusIcon size={20} />
                  Tambah Destinasi
                </button>
              </a>
            </div>

            <div
              className="bg-white rounded-lg"
              style={{ borderRadius: "20px" }}
            >
              <table className="w-full" style={{ width: "100%" }}>
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">NO</th>
                    <th className="text-left p-4">DESTINASI</th>
                    <th className="text-left p-4">GAMBAR</th>
                    <th className="text-left p-4">ALAMAT</th>
                    <th
                      className="text-right p-4"
                      style={{ textAlign: "right" }}
                    >
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {destinations.map((item, index) => (
                    <tr
                      key={item.destinasi_id}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="p-4">{index + 1}</td>
                      <td className="p-4">{item.destinasi_name}</td>
                      <td className="p-4">
                        {(() => {
                          const gambar = item.destinasi_gambar
                            ? JSON.parse(item.destinasi_gambar)
                            : [];
                          return (
                            <img
                              src={`http://localhost:5000/${gambar[0]}`}
                              alt={item.destinasi_name}
                              style={{ width: "100px" }}
                            />
                          );
                        })()}
                      </td>
                      <td className="p-4">{item.destinasi_location}</td>
                      <td className="p-4">
                        <div className="d-flex gap-2 justify-content-end">
                          <button
                            className="bg-yellow-100 p-2 rounded-md d-flex gap-2 align-items-center"
                            style={{
                              background: "#FFF9CE",
                              color: "orange",
                              border: "none",
                            }}
                          >
                            <PencilIcon size={16} className="text-yellow-600" />
                            Edit
                          </button>
                          <button
                            className="bg-red-100 p-2 rounded-md d-flex align-items-center gap-2"
                            style={{
                              background: "#FFF0DE",
                              color: "red",
                              border: "none",
                            }}
                          >
                            <TrashIcon
                              size={16}
                              onClick={() => {
                                if (
                                  window.confirm(
                                    "Apakah Anda yakin ingin menghapus destinasi ini?"
                                  )
                                ) {
                                  handleDelete(item.destinasi_id);
                                }
                              }}
                              className="text-red-600"
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div
                className="p-4 d-flex align-items-center justify-content-between text-sm text-gray-600"
                style={{ borderTop: "1px solid gainsboro" }}
              >
                <div>Menampilkan 1-10 dari 15</div>
                <div className="d-flex gap-2">
                  <button className="p-2 border rounded hover:bg-gray-50">
                    <ChevronLeftIcon size={16} />
                  </button>
                  <button className="p-2 border rounded hover:bg-gray-50">
                    <ChevronRightIcon size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
