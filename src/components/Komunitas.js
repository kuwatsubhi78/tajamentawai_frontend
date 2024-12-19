import React, { useEffect, useState } from "react";
import api from "../config/api";
import axios from "axios";

import "./infowisatawan.css";

const SandiAccountKomunitas = () => {
  const [isKomen, setIsKomen] = useState(false);
  const [openKomen, setOpenKomen] = useState(false);

  const handleKomen = () => {
    setIsKomen(!isKomen);
  };

  const checkLogin = async () => {
    try {
      const response = await axios.get(`${api}/users/me`, {
        withCredentials: true, // Mengirim cookie untuk autentikasi
      });

      // Jika status bukan 200, arahkan ke halaman utama
      if (response.status !== 200) {
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Error checking login:", error.message);

      // Arahkan ke halaman utama jika terjadi error (misalnya, token expired)
      window.location.href = "/";
    }
  };

  const handleLogout = async () => {
    await axios
      .post(
        `${api}/logout`,
        {},
        {
          withCredentials: true,
        }
      )
      .then(() => {
        window.location.href = "/";
      });
  };

  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <div>
      <header style={{ background: "white" }}>
        <div
          class="container d-flex justify-content-end align-items-center"
          style={{ color: "white" }}
        >
          <div class="d-flex justify-content-between align-items-center gap-3">
            <div>
              <input
                placeholder="Cari di komunitas..."
                style={{ borderRadius: "25px" }}
              />
            </div>
            <div>
              <div
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/notification.webp"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center gap-3">
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/profile.webp"
                  alt="profile"
                  title="profil"
                  onClick={() => (window.location.href = "/komunitas/profile")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                />
              </div>
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                {/* <img
                  src="/arrow_down.webp"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/*section side bar*/}
      <div
        class="d-flex flex-column justify-content-between p-3 align-items-center shadow"
        style={{
          width: "100px",
          height: "100%",
          position: "fixed",
          top: "0",
        }}
      >
        <div class="d-flex flex-column gap-3 align-items-center">
          <div class="mb-3">
            <a href="/home-login" style={{ textDecoration: "none" }}>
              <img src="/logo_komunitas.webp" style={{ width: "48px" }} />{" "}
            </a>
          </div>
          <div>
            <a
              href="/komunitas"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img src="/home.webp" style={{ width: "24px" }} />
            </a>
          </div>
          <div>
            <a
              href="/komunitas/saved"
              style={{ textDecoration: "none", color: "black" }}
            >
              <img src="/bookmark.webp" style={{ width: "24px" }} />
            </a>
          </div>
        </div>
        <div>
          {/* <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleLogout();
            }}
            style={{ textDecoration: "none", color: "black" }}
          > */}
          <img
            src="/logout.webp"
            onClick={handleLogout}
            title="Logout"
            style={{ width: "24px", cursor: "pointer" }}
          />
          {/* </a> */}
        </div>
      </div>
      <div
        class="container d-flex flex-column"
        style={{ gap: "20px", marginTop: "50px", marginBottom: "100px" }}
      >
        <div
          class="d-flex gap-4 align-items-center p-4 shadow col-12"
          style={{ borderRadius: "20px" }}
        >
          <div>
            <img src="/profile.webp" />
          </div>
          <div style={{ width: "100%" }}>
            <div>
              <input placeholder="Apa yang ingin anda tanyakan atau bagikan?" />
            </div>
            <div class="d-flex justify-content-around mt-3">
              <div class="d-flex align-items-center gap-2">
                <img
                  src="/ask-q.webp"
                  style={{ width: "24px", height: "24px" }}
                />
                Tanya
              </div>
              <div class="d-flex align-items-center gap-2">
                <img
                  src="/share.webp"
                  style={{ width: "24px", height: "24px" }}
                />
                Kirim
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "30px 30px",
            borderRadius: "10px",
            background: "white",
            right: "0",
            marginTop: "10px",
          }}
          class="shadow"
        >
          <div class="d-flex gap-3 align-items-center mb-4">
            <img
              src="/profile.webp"
              style={{ width: "48px", height: "48px" }}
            />
            <div>
              <div>
                <b>adelexplorer</b>
              </div>
              <div>12/09/2024</div>
            </div>
          </div>
          <div>
            <div class="mb-2">
              <b>
                Panduan Singkat untuk Pemula di Mentawai: Dari Transportasi
                hingga Rekomendasi Tempat Makan
              </b>
            </div>
            <div>
              Buat teman-teman yang baru pertama kali ke Mentawai, berikut
              beberapa tips dasar dari pengalaman saya: Transportasi: Ada kapal
              feri dari Padang yang biasanya berangkat pagi. Pilih kelas yang
              nyaman karena perjalanan bisa cukup panjang, sekitar 10 jam!
              Penginapan: Untuk pemula, saya rekomendasikan menginap di sekitar
              Pantai Mapadegat di Pulau Sipora. Area ini dekat dengan banyak
              spot bagus. Makanan: Jangan lupa coba keladi bakar dan ikan bakar
              sambal khas Mentawai—rasanya benar-benar khas dan bikin nagih!
              Kalau ada yang punya tips tambahan atau rekomendasi lain, yuk
              berbagi di komentar! 😊
            </div>
            <div class="d-flex mt-3 gap-3">
              <div style={{ width: "100%" }}>
                <img
                  src="/mentawai_culture_right.jpg"
                  style={{
                    width: "100%",
                    maxHeight: "400px",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div style={{ width: "100%" }}>
                <img
                  src="/mentawai_culture_right.jpg"
                  style={{
                    width: "100%",
                    maxHeight: "400px",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
              </div>
            </div>
            <div
              class="d-flex justify-content-between mt-3"
              style={{
                paddingBottom: "10px",
                borderBottom: "1px solid gainsboro",
              }}
            >
              <div>359 Rb - Suka</div>
              <div onClick={() => setOpenKomen(!openKomen)}>1 - Komentar</div>
            </div>
            <div class="d-flex justify-content-between mt-3">
              <div class="d-flex gap-3">
                <div class="d-flex align-items-center gap-2">
                  <img src="/suka.webp" style={{ width: "24px" }} /> Suka
                </div>
                <div
                  class="d-flex align-items-center gap-2"
                  onClick={() => handleKomen()}
                >
                  <img src="/komen.webp" style={{ width: "24px" }} /> Komen
                </div>
              </div>
              <div class="d-flex align-items-center gap-2">
                <img src="/bookmark.webp" style={{ width: "24px" }} /> Simpan
              </div>
            </div>
            {isKomen && (
              <div class="d-flex gap-2 align-items-center mt-5">
                <div>
                  <img
                    src="/profile.webp"
                    style={{ width: "32px", height: "32px" }}
                  />
                </div>
                <div style={{ width: "100%" }}>
                  <div class="d-flex align-items-center">
                    <input
                      placeholder="Tulis Komentar..."
                      style={{
                        borderRadius: "30px 0 0 30px",
                        borderRight: "0",
                      }}
                    />
                    <div
                      style={{
                        border: "1px solid gainsboro",
                        borderLeft: "0",
                        padding: "9px",
                        borderRadius: "0 30px 30px 0",
                      }}
                    >
                      <img src="/send.webp" style={{ width: "24px" }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {openKomen && (
              <div>
                <div class="mt-5">
                  <b>Komentar</b>
                </div>
                <div class="d-flex gap-2 align-items-center mt-5">
                  <div>
                    <img
                      src="/profile.webp"
                      style={{ width: "32px", height: "32px" }}
                    />
                  </div>
                  <div>
                    <div class="d-flex align-items-center gap-2">
                      <div>
                        <b>Adel Jasmen</b>
                      </div>
                      <div>12/09/24</div>
                    </div>
                  </div>
                </div>
                <div class="ml-3 mt-2" style={{ marginLeft: "40px" }}>
                  Keren bangett....
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          style={{
            padding: "30px 30px",
            borderRadius: "10px",
            background: "white",
            right: "0",
            marginTop: "10px",
          }}
          class="shadow"
        >
          <div class="d-flex gap-3 align-items-center mb-4">
            <img
              src="/profile.webp"
              style={{ width: "48px", height: "48px" }}
            />
            <div>
              <div>
                <b>adelexplorer</b>
              </div>
              <div>12/09/2024</div>
            </div>
          </div>
          <div>
            <div class="mb-2">
              <b>
                Panduan Singkat untuk Pemula di Mentawai: Dari Transportasi
                hingga Rekomendasi Tempat Makan
              </b>
            </div>
            <div>
              Buat teman-teman yang baru pertama kali ke Mentawai, berikut
              beberapa tips dasar dari pengalaman saya: Transportasi: Ada kapal
              feri dari Padang yang biasanya berangkat pagi. Pilih kelas yang
              nyaman karena perjalanan bisa cukup panjang, sekitar 10 jam!
              Penginapan: Untuk pemula, saya rekomendasikan menginap di sekitar
              Pantai Mapadegat di Pulau Sipora. Area ini dekat dengan banyak
              spot bagus. Makanan: Jangan lupa coba keladi bakar dan ikan bakar
              sambal khas Mentawai—rasanya benar-benar khas dan bikin nagih!
              Kalau ada yang punya tips tambahan atau rekomendasi lain, yuk
              berbagi di komentar! 😊
            </div>
            <div
              class="d-flex justify-content-between mt-3"
              style={{
                paddingBottom: "10px",
                borderBottom: "1px solid gainsboro",
              }}
            >
              <div>359 Rb - Suka</div>
              <div>10 - Komentar</div>
            </div>
            <div class="d-flex justify-content-between mt-3">
              <div class="d-flex gap-3">
                <div class="d-flex align-items-center gap-2">
                  <img src="/suka.webp" style={{ width: "24px" }} /> Suka
                </div>
                <div class="d-flex align-items-center gap-2">
                  <img src="/komen.webp" style={{ width: "24px" }} /> Komen
                </div>
              </div>
              <div class="d-flex align-items-center gap-2">
                <img src="/bookmark.webp" style={{ width: "24px" }} /> Simpan
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SandiAccountKomunitas;
