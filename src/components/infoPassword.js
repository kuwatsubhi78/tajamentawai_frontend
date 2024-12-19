import React, { useState } from "react";
import axios from "axios";
import api from "../config/api";
import "./infowisatawan.css";

const InformasiKontak = () => {
  const [oldPassword, setOLdPassword] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isPasswordsMatch =
    newPassword && confirmPassword && newPassword === confirmPassword;

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${api}/change-password`,
        {
          oldPassword,
          newPassword,
        },
        {
          withCredentials: true,
        }
      );
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <>
      <header>
        <div class="container">
          <div class="icon">
            <img
              onClick={() => (window.location.href = "/info-wisatawan")}
              alt=""
              title="Kembali"
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
              <a
                href="/info-kontak"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div
                  class="d-flex gap-2 align-item-center p-3"
                  style={{ cursor: "pointer" }}
                >
                  <div class="icon-small">
                    <img src="/kontak.png" />
                  </div>
                  <div>Informasi Kontak</div>
                </div>
              </a>
            </div>
          </div>
          <div class="mt-3">
            <div class="title">Keamanan</div>
            <div class="bg-white rounded">
              <div
                class="d-flex gap-2 align-item-center p-3"
                style={{ cursor: "pointer" }}
              >
                <div class="icon-small">
                  <img src="/secure.webp" />
                </div>
                <div>Ubah Kata Sandi</div>
              </div>
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
          <form onSubmit={handlePasswordChange}>
            <div style={{ padding: "30px" }}>
              <div>
                <div class="title normal-font">Kata Sandi Lama</div>
                <div>
                  <input
                    type="password"
                    name="old_password"
                    id="old_password"
                    value={oldPassword}
                    placeholder="Masukin Password Lama..."
                    onChange={(e) => setOLdPassword(e.target.value)}
                  />
                </div>
              </div>
              <div class="mt-3">
                <div class="title normal-font">Kata Sandi Baru</div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={newPassword}
                    placeholder="Masukan Password Baru..."
                    onChange={(e) => setNewPassword(e.target.value)}
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div class="mt-3">
                <div class="title normal-font">Ulangi Kata Sandi Baru</div>
                <div>
                  <input
                    type="password"
                    name="confirmation_password"
                    id="confirmation_password"
                    placeholder="Konfirmasi Password Baru..."
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {!isPasswordsMatch &&
                    newPassword.length > 0 &&
                    confirmPassword.length > 0 && (
                      <p style={{ color: "red" }}>Kata sandi tidak cocok</p>
                    )}
                </div>
              </div>
              <div class="mt-3 d-flex justify-content-center">
                <button
                  type="submit"
                  disabled={!isPasswordsMatch}
                  style={{ cursor: "pointer" }}
                >
                  Simpan
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default InformasiKontak;
