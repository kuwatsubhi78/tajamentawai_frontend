import React from "react";
import "./Home.css";
import "./Header.css";

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
  const destinations = [
    {
      id: 1,
      name: "Pulau Sipora",
      image: "/destinasi_1.jpg",
    },
    {
      id: 2,
      name: "Desa Wisata Muntei",
      image: "/destinasi_2.jpg",
    },
    {
      id: 3,
      name: "Pulau Awera",
      image: "/destinasi_3.jpg",
    },
  ];
  return (
    <div className="home">
      <header className="header">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => (window.location.href = "/")}
          className="logo"
        >
          <h1>TajaMentawai</h1>
          <p>Mengenal Indonesia Lebih Dalam</p>
        </div>
        <nav className="navigation">
          <ul>
            <a
              href="/home-login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li className="active">Beranda</li>
            </a>
            <a
              href="/destination"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Destinasi</li>
            </a>
            <a
              href="/artikel"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Artikel</li>
            </a>
            <a
              href="/komunitas"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Komunitas</li>
            </a>
          </ul>
        </nav>
        <div className="menu-button">
          {/* <div className="menu-icon"></div> */}
          <img
            className="menu-icon"
            src="/profile.webp"
            alt="Profile"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
              cursor: "pointer",
              marginLeft: "20px",
            }}
          />
        </div>
      </header>
      {/* Hero Section */}
      {/*<section className="hero-section">
        <div className="overlay"></div>
        <div className="container hero-content">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-3 text-white fw-bold mb-4" style={{fontSize:'24px'}}>
                Explore the untouched beauty of<br />
                <span className="display-1 fw-bold">MENTAWAI</span>
              </h1>
              <p className="text-white mb-4">
                Temukan pantai-pantai eksotis,<br />
                spot selancar kelas dunia dan<br />
                budaya kaya kepulauan Mentawai
              </p>
              <div className="d-inline-block py-2 px-4 rounded text-center text-white" style={{maxWidth: "250px",background: "#fff3",backdropFilter: "blur(2px)"}}>
                <span className="fw-bold">100+ Travelers</span>
                <div>
                  <span>Lebih dari 100 Wisatawan menggunakan platform ini.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      <section
        className="home-section"
        style={{
          backgroundImage: "url(http://localhost:3000/home-login-bg.webp)",
          backgroundSize: "cover",
        }}
      >
        {/* Overlay and Text Section */}
        <div className="home-content" style={{ padding: "50px 10%" }}>
          <div className="text-box">
            <button className="cta-button">Rasakan Pengalamannya</button>
            <h1>
              Jelajahi Keindahan yang Tak Tersentuh dari –{" "}
              <span>
                <i>MENTAWAI</i>
              </span>
            </h1>
          </div>
        </div>
      </section>
      <div className="container py-5">
        {/* Header Section */}
        <div className="row mb-4">
          <div className="col-md-6">
            <h2 className="display-4 text-info fw-bold">
              Kepulauan
              <br />
              Mentawai
            </h2>
          </div>
        </div>

        {/* Information Cards */}
        <div className="row g-4">
          {/* First Card */}
          <div className="col-12">
            <div
              className="card bg-dark text-white"
              style={{
                background: "linear-gradient(135deg, #155e75 0%, #083344 100%)",
              }}
            >
              <div className="card-body p-4">
                <h3 className="card-title h3 mb-4">Tentang</h3>
                <div className="card-text">
                  <p className="mb-3">
                    Kepulauan Mentawai adalah sebuah gugusan pulau yang terletak
                    di lepas pantai barat pulau Sumatra, Indonesia, di Samudra
                    Hindia. Kepulauan ini terdiri dari beberapa pulau besar,
                    yaitu: Pulau Siberut, Pulau Sipora, Pulau Pagai Utara, dan
                    Pulau Pagai Selatan, serta beberapa pulau kecil. Kepulauan
                    Mentawai merupakan bagian dari Provinsi Sumatra Barat.
                  </p>
                  <p className="mb-3">
                    Suku Mentawai, yang merupakan penduduk asli kepulauan ini,
                    memiliki budaya dan tradisi yang unik termasuk ssolat
                    berbasis klan dan praktik spiritual unamisme. Mereka
                    Mentawai selaras dengan tata hidup tradisional yang memiliki
                    nilai simbiosis tinggi. Wilayah ini juga menjadi tujuan
                    wisata populer terutama untuk surfing karena ombak yang
                    besar dan menantang di beberapa pantai.
                  </p>
                  <p className="mb-3">
                    Selain itu, Kepulauan Mentawai memiliki keanekaragaman
                    hayati yang tinggi, dengan hutan tropis yang menjadi rumah
                    bagi berbagai spesies endemik seperti monyet Mentawai.
                  </p>
                  <small className="text-light-emphasis">
                    Sumber: https://id.wikipedia.org/wiki/Kepulauan_Mentawai
                  </small>
                </div>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-12">
            <div
              className="card bg-dark text-white"
              style={{
                background: "linear-gradient(135deg, #155e75 0%, #083344 100%)",
              }}
            >
              <div className="card-body p-4">
                <h3 className="card-title h3 mb-4">Solusi</h3>
                <div className="card-text">
                  <p className="mb-3">
                    Wisatawan sering mengalami kesulitan menemukan informasi
                    lengkap dan terbaru tentang destinasi pariwisata di
                    Indonesia, yang menyebabkan potensi pariwisata sektor
                    perairan tidak termaksimalkan. Akibatnya, wisatawan
                    kesulitan merencanakan perjalanan dan muda terdadap
                    agrowista maupun, sike merekam ia tidak segera diatasi,
                    kunjungan ke destinasi-agrowista akan terus berkurang,
                    sehingga sektor pariwisata dan pertanian kehilangan peluang
                    untuk berkembang.
                  </p>
                  <p className="mb-3">
                    Sebagian wisatawan mencoba mengatasi masalah ini dengan
                    mengandaikan informasi yang tersebar dan acak akik enih
                    terbaru saja, namun menggunakan informasi kali tidak efisien
                    karena informasi yang didapatkan tidak selalu akurat atau
                    up-to-date. memgegambarkan akibatnya wisatawan yang
                    bersangkat dan mudah digurakan wisatawan akan lebih mudah
                    mendapatkan informasi, merencanakan perjalanan dan
                    memiliargi pengalanan agrowista secara optimal, sehingga
                    daya tarik ector tersebut meningkat. Sebagai contoh, Taja
                    Mentawai adalah platform yang dirancang untuk memudahkan
                    wisatawan menemukan informasi lengkap tentang wisata di
                    Kepulauan Mentawai.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Title */}
          <div className="col-12 text-end">
            <h2 className="display-4 text-info fw-bold">
              Taja
              <br />
              Mentawai
            </h2>
          </div>
        </div>
      </div>
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
              { text: "Komunitas", href: "#" },
              { text: "Destinasi", href: "#" },
            ]}
          />

          {/* Quick Links */}
          <FooterSection
            title="QUICK LINKS"
            links={[
              { text: "Tentang", href: "#" },
              { text: "Artikel", href: "#" },
              { text: "Blog", href: "#" },
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
