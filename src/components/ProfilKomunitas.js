import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../config/api";
import "./infowisatawan.css";

const ProfilKomunitas = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gabung, setGabung] = useState("");

  const profil = async () => {
    try {
      const response = await axios.get(`${api}/users/me`, {
        withCredentials: true,
      });
      console.log(response.data.c);

      setUsername(response.data.username);
      setEmail(response.data.email);
      setGabung(response.data.created_at);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    profil();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  return (
    <div>
      <header>
        <div
          class="container d-flex justify-content-between align-items-center"
          style={{ color: "white" }}
        >
          <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>
              TAJAMENTAWAI
            </div>
            <div>Jelajahi setiap sudut mentawai</div>
          </div>
          <div class="d-flex justify-content-left align-items-center gap-3">
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
                  src="/notification.png"
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
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              {/* <div style={{width:'24px',height:'24px',borderRadius:'50%',overflow:'hidden'}}>
								<img src="/arrow_down.png" style={{width:'100%',height:'100%',objectFit:'cover'}} />
							</div> */}
            </div>
          </div>
        </div>
      </header>
      <div style={{ width: "100%", height: "350px" }} class="position-relative">
        <img
          src="/surfing_bg.jpg"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: "0",
            background: "#00000033",
            width: "100%",
            height: "100%",
          }}
        ></div>
      </div>
      <div
        class="container position-relative d-flex gap-4"
        style={{ height: "80vh" }}
      >
        <div
          style={{
            padding: "30px 30px",
            borderRadius: "10px",
            top: "-50px",
            background: "white",
          }}
          class="shadow col-4 position-absolute"
        >
          <div class="d-flex justify-content-center">
            <div style={{ width: "100px", height: "100px" }}>
              <img
                src="/profile.webp"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div class="d-flex justify-content-center flex-column align-items-center mt-4">
            <div>
              <b>Adel Tria Jasmen</b>
            </div>
            <div>@{username}</div>
          </div>
          <div class="text-center mt-3">
            Halo, saya Adel, seorang Mahasiswa yang suka travelling yang senang
            menjelajah alam dan budaya unik di setiap sudut Indonesia.
          </div>
          <div class="d-flex justify-content-between mt-4">
            <div>
              <b>Bergabung Pada</b>
            </div>
            <div>
              {/* <b>{formatDate(gabung)}</b> */} <b>28 September 2024</b>
            </div>
          </div>
          <div class="d-flex justify-content-between mt-2">
            <div>
              <b>Domisili</b>
            </div>
            <div>
              <b>Mentawai</b>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "30px 30px",
            borderRadius: "10px",
            background: "white",
            right: "0",
            marginTop: "40px",
          }}
          class="shadow col-7 position-absolute"
        >
          <div class="d-flex gap-3 align-items-center mb-4">
            {/* <img
              src="/profile.webp"
              style={{ width: "48px", height: "48px" }}
            /> */}
            <div>
              <div>{/* <b>@{username}</b> */}</div>
              {/* <div>{formatDate(gabung)}</div> */}
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
              {/* <div>359 Rb - Suka</div>
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilKomunitas;
