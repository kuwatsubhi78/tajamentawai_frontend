import React, { useEffect, useState } from "react";
import "./infowisatawan.css";
import axios from "axios";
import api from "../config/api";

const InformasiKontak = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const user = async () => {
    try {
      const response = await axios.get(`${api}/users/me`, {
        withCredentials: true,
      });
      setEmail(response.data.email);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  useEffect(() => {
    user();
  }, []);
  return (
    <>
      <header>
        <div class="container">
          <div class="icon">
            <img
              title="kembali"
              onClick={() => window.history.back()}
              alt=""
              src="/leftarrow.png"
            />
          </div>
        </div>
      </header>
      <div
        class="container d-flex"
        style={{ gap: "70px", marginTop: "100px", marginBottom: "100px" }}
      >
        <div class="col-3">
          <div>
            <div class="title">Pengaturan Akun</div>
            <div class="bg-white rounded">
              <a
                href="/info-wisatawan"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div
                  class="d-flex gap-2 align-item-center p-3"
                  style={{ cursor: "pointer" }}
                >
                  <div class="icon-small">
                    <img src="/user.png" />
                  </div>
                  <div>Info Wisatawan</div>
                </div>
              </a>
              <div
                class="d-flex gap-2 align-item-center p-3"
                style={{ cursor: "pointer" }}
              >
                <div class="icon-small">
                  <img src="/kontak.png" />
                </div>
                <div>Informasi Kontak</div>
              </div>
            </div>
          </div>
          <div class="mt-3">
            <div class="title">Keamanan</div>
            <div class="bg-white rounded">
              <a
                href="/ubah-password"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div
                  class="d-flex gap-2 align-item-center p-3"
                  style={{ cursor: "pointer" }}
                >
                  <div class="icon-small">
                    <img src="/secure.webp" />
                  </div>
                  <div>Ubah Kata Sandi</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            background: "white",
            border: "1px solid gainsboro",
            borderRadius: "20px",
          }}
        >
          <div style={{ padding: "30px" }}>
            <div>
              <div class="title normal-font">Email</div>
              <div>
                <input name="email" id="email" value={email} />
              </div>
            </div>
            <div class="mt-3">
              <div class="title normal-font">Nama yang tampil dikomunitas</div>
              <div>
                <input name="name" id="name" value="Adel Tria Jasmen" />
              </div>
            </div>
            <div class="mt-3 d-flex justify-content-center">
              <button>Simpan</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformasiKontak;
