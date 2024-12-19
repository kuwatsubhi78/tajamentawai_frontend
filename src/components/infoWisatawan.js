import React from "react";
import "./infowisatawan.css";

const infoWisatawan = () => {
  return (
    <>
      <header>
        <div class="container">
          <div class="icon">
            <img
              alt=""
              title="kembali"
              onClick={() => (window.location.href = "/komunitas/profile")}
              style={{ cursor: "pointer" }}
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
              <div
                class="d-flex gap-2 align-item-center p-3"
                style={{ cursor: "pointer" }}
              >
                <div class="icon-small">
                  <img src="/user.png" />
                </div>
                <div>Info Wisatawan</div>
              </div>
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
            <div class="d-flex justify-content-center mb-4">
              <div class="profile" style={{ position: "relative" }}>
                <img src="/profile.png" />
                <div class="edit-profile">
                  <img src="/edit-profile-2.png" />
                </div>
              </div>
            </div>
            <div>
              <div class="title normal-font">Username</div>
              <div>
                <input name="username" id="username" value="@adelexplorer" />
              </div>
            </div>
            <div class="mt-3">
              <div class="title normal-font">Nama yang tampil dikomunitas</div>
              <div>
                <input name="name" id="name" value="Adel Tria Jasmen" />
              </div>
            </div>
            <div class="mt-3">
              <div class="title normal-font">Domisili</div>
              <div>
                <input name="address" id="address" value="Mentawai" />
              </div>
            </div>
            <div class="mt-3">
              <div class="title normal-font">Tentang Wisatawan</div>
              <div>
                <textarea name="about" id="about">
                  Halo, saya Adel, seorang Mahasiswa yang suka travelling yang
                  senang menjelajah alam dan budaya unik di setiap sudut
                  Indonesia.
                </textarea>
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

export default infoWisatawan;
