import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import api from "../config/api";

const FooterSection = ({ title, description, socialLinks, links }) => {
  return (
    <div className="footer-section">
      <h3>{title}</h3>
      {description && <div>{description}</div>}
      {socialLinks && (
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} aria-label={link.alt}>
              <i className={`bi ${link.icon}`} style={{ fontSize: "28px" }}></i>
            </a>
          ))}
        </div>
      )}
      {links && (
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [error, setError] = React.useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const fetchDestinations = async () => {
    try {
      const response = await fetch(`${api}/destinasi`);
      const data = await response.json();
      setDestinations(Array.isArray(data.data) ? data.data : []);
    } catch (error) {
      setError(error.message);
    }
  };

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch(`${api}/artikel`);
      const data = await response.json();
      setBlogPosts(Array.isArray(data.artikel) ? data.artikel : []);
    } catch (error) {
      setError(error.message);
    }
  };

  const ceckLogin = async () => {
    try {
      const response = await fetch(`${api}/users/me`, {
        method: "GET",
        credentials: "include",
      });
      setIsLogin(response.ok);
    } catch (error) {
      setError(error.message);
    }
  };
  // const destinations = [
  //   {
  //     id: 1,
  //     name: "Pulau Sipora",
  //     image: "/destinasi_1.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Desa Wisata Muntei",
  //     image: "/destinasi_2.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Pulau Awera",
  //     image: "/destinasi_3.jpg",
  //   },
  // ];
  // const blogPosts = [
  //   {
  //     id: 1,
  //     title:
  //       "Eksplorasi Budaya Mentawai: Keunikan Tradisi dan Kehidupan Masyarakat Pulau",
  //     image: "/article_1.png",
  //     author: "Admin Mentawai",
  //     date: "25 Jan 2024",
  //     likes: 258,
  //   },
  //   {
  //     id: 2,
  //     title:
  //       "Mentawai: Mengenal Lebih Dekat Suku Penghuni Pulau dan Kearifan Lokal Mereka",
  //     image: "/article_2.png",
  //     author: "Admin Mentawai",
  //     date: "20 Jan 2024",
  //     likes: 245,
  //   },
  //   {
  //     id: 3,
  //     title:
  //       "Surga Tersembunyi di Mentawai: Wisata Alam dan Pesona Pantai Tropis",
  //     image: "/article_3.png",
  //     author: "Admin Mentawai",
  //     date: "15 Jan 2024",
  //     likes: 180,
  //   },
  //   {
  //     id: 3,
  //     title:
  //       "Surga Tersembunyi di Mentawai: Wisata Alam dan Pesona Pantai Tropis",
  //     image: "/article_3.png",
  //     author: "Admin Mentawai",
  //     date: "15 Jan 2024",
  //     likes: 180,
  //   },
  //   {
  //     id: 3,
  //     title:
  //       "Surga Tersembunyi di Mentawai: Wisata Alam dan Pesona Pantai Tropis",
  //     image: "/article_3.png",
  //     author: "Admin Mentawai",
  //     date: "15 Jan 2024",
  //     likes: 180,
  //   },
  //   {
  //     id: 3,
  //     title:
  //       "Surga Tersembunyi di Mentawai: Wisata Alam dan Pesona Pantai Tropis",
  //     image: "/article_3.png",
  //     author: "Admin Mentawai",
  //     date: "15 Jan 2024",
  //     likes: 180,
  //   },
  // ];
  useEffect(() => {
    fetchDestinations();
    fetchBlogPosts();
    ceckLogin();
  }, []);
  return (
    <div className="home">
      <header className="sticky-header">
        <div className="header-container">
          {/* Logo */}
          <div className="header-logo">
            <img
              src="/icon.png" // Ganti dengan logo Anda
              alt="TajaMentawai Logo"
              className="logo-image"
            />
          </div>

          {/* Navigation Links */}
          <nav className="header-nav">
            <a href="#beranda" className="nav-link">
              Beranda
            </a>
            <a href="#tentang" className="nav-link">
              Tentang
            </a>
            <a href="#destinasi" className="nav-link">
              Destinasi
            </a>
            <a href="#blog" className="nav-link">
              Blog
            </a>
          </nav>

          {/* Buttons */}
          {!isLogin && (
            <div className="header-buttons">
              <a href="/login">
                <button className="btn masuk-btn">Masuk</button>
              </a>
              <a href="/register">
                <button className="btn daftar-btn">Daftar</button>
              </a>
            </div>
          )}

          {/* Konten tambahan untuk user yang sudah login */}
          {isLogin && (
            <img
              src="/profile.webp"
              alt="Profile"
              onClick={() => navigate("/komunitas/profile")}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
          )}
        </div>
      </header>
      {/* Hero Section */}
      <section id="beranda" className="hero-section">
        <div className="overlay"></div>
        <div className="container hero-content">
          <div className="row">
            <div className="col-lg-8">
              <h1
                className="display-3 text-white fw-bold mb-4"
                style={{ fontSize: "24px" }}
              >
                Explore the untouched beauty of
                <br />
                <span className="display-1 fw-bold">MENTAWAI</span>
              </h1>
              <p className="text-white mb-4">
                Temukan pantai-pantai eksotis,
                <br />
                spot selancar kelas dunia dan
                <br />
                budaya kaya kepulauan Mentawai
              </p>
              <div
                className="d-inline-block py-2 px-4 rounded text-center text-white"
                style={{
                  maxWidth: "250px",
                  background: "#fff3",
                  backdropFilter: "blur(2px)",
                }}
              >
                <span className="fw-bold">100+ Travelers</span>
                <div>
                  <span>
                    Lebih dari 100 Wisatawan menggunakan platform ini.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="about-section py-5">
        <div className="container" style={{ maxWidth: "100%" }}>
          <div className="row align-items-center justify-content-between">
            <div className="col-md-3" style={{ paddingLeft: "0" }}>
              <div
                className="traditional-house-card overflow-hidden"
                style={{ borderRadius: "0 100px 10px 0" }}
              >
                <img
                  src="/mentawai_culture_left.jpg"
                  alt="Traditional Mentawai House"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-content text-center">
                <h2 className="section-title" style={{ color: "#2faab1" }}>
                  TENTANG
                </h2>
                <p className="section-text">
                  Taja Mentawai merupakan platform yang dirancang untuk
                  memudahkan Anda menemukan informasi lengkap tentang wisata di
                  Kepulauan Mentawai.
                </p>
                <p className="section-text">
                  Dengan Taja Mentawai, Anda dapat mengeksplorasi destinasi
                  terbaik, kegiatan seru, dan panduan perjalanan untuk liburan
                  yang tak terlupakan di Kepulauan Mentawai.
                </p>
                <a href="#" style={{ textDecoration: "none", color: "black" }}>
                  <button className="btn btn-outline-primary rounded-pill button_next">
                    Lihat selengkapnya
                  </button>
                </a>
              </div>
            </div>
            <div className="col-md-3" style={{ paddingRight: "0" }}>
              <div
                className="culture-card overflow-hidden"
                style={{ borderRadius: "10px 0 0 100px" }}
              >
                <img
                  src="/mentawai_culture_right.jpg"
                  alt="Mentawai Culture"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="destinasi" className="destinations-section">
        <div className="layer-destinations"></div>
        <div
          className="container"
          style={{
            zIndex: 2,
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="section-header">
            <h2 className="section-title">DESTINASI</h2>
            <p className="section-subtitle">
              Berikut merupakan destinasi di Kepulauan Mentawai
            </p>
            <a href="/destination" className="btn-see-more">
              Lihat Selengkapnya
            </a>
          </div>

          <div className="row destination-cards" style={{ width: "60%" }}>
            {destinations.slice(0, 3).map((destination) => (
              <div key={destination.destinasi_id} className="col-md-4 mb-4">
                <div className="destination-card">
                  <div className="card-image">
                    {(() => {
                      const gambar = destination.destinasi_gambar
                        ? JSON.parse(destination.destinasi_gambar)
                        : [];
                      return (
                        <img
                          src={`${api}/${gambar[0]}`}
                          alt={destination.destinasi_name}
                        />
                      );
                    })()}
                    <div className="card-overlay">
                      <h3>{destination.destinasi_name}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="blog-section">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-6">
              <h2 className="section-title" style={{ color: "#2faab1" }}>
                Blog & Artikel about
                <br />
                Mentawai
              </h2>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="blog-description">
                Menelusuri Keindahan Mentawai: Surga Tropis dengan Pantai
                Berpasir Putih, Ombak Sempurna untuk Selancar, dan Budaya Unik
                Suku Mentawai yang Menawan
              </p>
              <a href="/artikel" className="btn-see-more">
                Lihat artikel lainnya
              </a>
            </div>
          </div>
          <div className="blog-grid">
            {blogPosts.slice(0, 3).map((post) => (
              <div key={post.artikel_id} className={`blog-card ${post.size}`}>
                <a
                  href="/artikel/detail"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="card-image">
                    {(() => {
                      const gambar = post.artikel_gambar
                        ? JSON.parse(post.artikel_gambar)
                        : [];
                      return (
                        <img
                          src={`${api}/${gambar[0]}`}
                          alt={post.artikel_title}
                        />
                      );
                    })()}
                  </div>
                  <div className="card-overlay">
                    <h3>{post.artikel_title}</h3>
                    <div className="card-meta">
                      <div className="author">
                        <img
                          src={`/profile.webp`}
                          alt={post.author}
                          className="author-avatar"
                        />
                        <span>{post.author.username}</span>
                      </div>
                      <div className="likes">
                        <i className="fas fa-heart"></i>
                        <span>{post.artikel_likes} Likes</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-container">
          {/* Logo and Social Links */}
          <FooterSection
            title="TAJAMENTAWAI"
            description="Jelajahi Setiap Sudut Mentawai"
            socialLinks={[
              { href: "#", icon: "bi-facebook", alt: "Facebook" },
              { href: "#", icon: "bi-instagram", alt: "Instagram" },
              { href: "#", icon: "bi-twitter", alt: "Twitter" },
              { href: "#", icon: "bi-linkedin", alt: "LinkedIn" },
            ]}
          />

          {/* Sitemap */}
          <FooterSection
            title="SITEMAP"
            links={[
              { text: "Beranda", href: "#" },
              { text: "Komunitas", href: "/komunitas" },
              { text: "Destinasi", href: "/destination" },
            ]}
          />

          {/* Quick Links */}
          <FooterSection
            title="QUICK LINKS"
            links={[
              { text: "Tentang", href: "#tentang" },
              { text: "Destinasi", href: "#destinasi" },
              { text: "Artikel & Blog", href: "#blog" },
            ]}
          />

          {/* Contact Info */}
          <FooterSection
            title="Let's Talk"
            description={
              <>
                <p>(+62) 812 3456 7890</p>
                <p>info@arunasita.com</p>
                <p>Indonesia, Mentawai</p>
              </>
            }
          />
        </div>
        <div className="footer-bottom">
          <p>
            © Copyright 2024 TajaMentawai. All Rights Reserved | Design by{" "}
            <strong>Team Arunasita</strong>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
