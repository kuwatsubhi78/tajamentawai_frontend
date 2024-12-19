import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import HomeLogin from "./components/HomeLogin";
import Login from "./components/Login";
import Register from "./components/Register";
import WisatawanInfo from "./components/infoWisatawan";
import InformasiKontak from "./components/informasiKontak";
import UbahPassword from "./components/infoPassword";
import SavedDestination from "./components/saved-destination";
import Destination from "./components/destination";
import DetailDestination from "./components/destination_detail";
import Ulasan from "./components/Ulasan";
import Artikel from "./components/Artikel";
import ArtikelDetail from "./components/Artikel-read";
import ProfileKomunitas from "./components/ProfilKomunitas";
import SettingAccountKomunitas from "./components/SettingAccountKomunitas";
import KontakAccountKomunitas from "./components/KontakAccountKomunitas";
import SandiAccountKomunitas from "./components/SandiAccountKomunitas";
import Komunitas from "./components/Komunitas";
import KomunitasSaved from "./components/KomunitasSaved";
import AdminLogin from "./components/LoginAdmin";
import AdminRegister from "./components/RegisterAdmin";
import AdminDashboard from "./components/AdminDashboard";
import AdminDestination from "./components/AdminDestination";
import AdminDestinationAdd from "./components/AdminDestinationAdd";
import AdminArtikel from "./components/AdminArtikel";
import AdminArtikelAdd from "./components/AdminArtikelAdd";

function App() {
  return (
    <Router>
      <div>
        {/* Routes */}
        <div
          className="container"
          style={{ padding: 0, margin: 0, maxWidth: "100%" }}
        >
          <Routes>
            <Route path="/home-login" element={<HomeLogin />} />
            <Route path="/" element={<Home />} />
            <Route path="/info-wisatawan" element={<WisatawanInfo />} />
            <Route path="/info-kontak" element={<InformasiKontak />} />
            <Route path="/ubah-password" element={<UbahPassword />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/saved-destination" element={<SavedDestination />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/destination/detail" element={<DetailDestination />} />
            <Route path="/destination/ulasan" element={<Ulasan />} />
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/artikel/detail" element={<ArtikelDetail />} />
            <Route path="/komunitas/profile" element={<ProfileKomunitas />} />
            <Route
              path="/komunitas/settings"
              element={<SettingAccountKomunitas />}
            />
            <Route
              path="/komunitas/kontak"
              element={<KontakAccountKomunitas />}
            />
            <Route
              path="/komunitas/sandi"
              element={<SandiAccountKomunitas />}
            />
            <Route path="/komunitas" element={<Komunitas />} />
            <Route path="/komunitas/saved" element={<KomunitasSaved />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/register" element={<AdminRegister />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/destination" element={<AdminDestination />} />
            <Route
              path="/admin/destination/add"
              element={<AdminDestinationAdd />}
            />
            <Route path="/admin/artikel" element={<AdminArtikel />} />
            <Route path="/admin/artikel/add" element={<AdminArtikelAdd />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
