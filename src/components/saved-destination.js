import React from 'react';
import './saved-destination.css';

const FooterSection = ({ title, description, socialLinks, links }) => {
  return (
    <div className="footer-section">
      <h3>{title}</h3>
      {description && <div>{description}</div>}
      {socialLinks && (
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} aria-label={link.alt}>
              <i className={`bi ${link.icon}`} style={{fontSize:'28px'}}></i>
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

const informasiKontak = ()=>{
	const blogPosts = [
    {
      id: 1,
      title: "Eksplorasi Budaya Mentawai: Keunikan Tradisi dan Kehidupan Masyarakat Pulau",
      image: "/article_1.png",
      author: "Admin Mentawai",
      date: "25 Jan 2024",
      likes: 258
    },
    {
      id: 2,
      title: "Mentawai: Mengenal Lebih Dekat Suku Penghuni Pulau dan Kearifan Lokal Mereka",
      image: "/article_2.png",
      author: "Admin Mentawai",
      date: "20 Jan 2024",
      likes: 245
    },
    {
      id: 3,
      title: "Surga Tersembunyi di Mentawai: Wisata Alam dan Pesona Pantai Tropis",
      image: "/article_3.png",
      author: "Admin Mentawai",
      date: "15 Jan 2024",
      likes: 180
    },
    {
      id: 3,
      title: "Surga Tersembunyi di Mentawai: Wisata Alam dan Pesona Pantai Tropis",
      image: "/article_3.png",
      author: "Admin Mentawai",
      date: "15 Jan 2024",
      likes: 180
    },
    {
      id: 3,
      title: "Surga Tersembunyi di Mentawai: Wisata Alam dan Pesona Pantai Tropis",
      image: "/article_3.png",
      author: "Admin Mentawai",
      date: "15 Jan 2024",
      likes: 180
    },
    {
      id: 3,
      title: "Surga Tersembunyi di Mentawai: Wisata Alam dan Pesona Pantai Tropis",
      image: "/article_3.png",
      author: "Admin Mentawai",
      date: "15 Jan 2024",
      likes: 180
    }
  ];
	return (
		<>
			<header style={{background:'white'}}>
				<div class="container">
					<div class="icon">
						<img src="/green-left-arrow.webp"/>
					</div>
				</div>
			</header>
			<div class="container d-flex align-item-center gap-3" style={{alignItems:'center'}}>
				<div class="line"></div>
				<div><b style={{whiteSpace:'nowrap',color:'#20a4b2'}}>Destinasi Tersimpan</b></div>
			</div>
			{/* Blog Section */}
      <section className="blog-section" style={{paddingTop:'40px'}}>
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <div key={post.id} className={`blog-card ${post.size}`}>
                <div className="card-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="card-overlay">
                  <h3>{post.title}</h3>
                  <div className="card-meta">
                    <div className="author">
                      <img 
                        src={`/profile.jpg`} 
                        alt={post.author} 
                        className="author-avatar"
                      />
                      <span>{post.author}</span>
                    </div>
                    <div className="likes">
                      <i className="fas fa-heart"></i>
                      <span>{post.likes} Likes</span>
                    </div>
                  </div>
                </div>
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
              { href: "#", icon: "bi-linkedin", alt: "LinkedIn" }
            ]}
          />

          {/* Sitemap */}
          <FooterSection 
            title="SITEMAP"
            links={[
              { text: "Beranda", href: "#" },
              { text: "Komunitas", href: "#" },
              { text: "Destinasi", href: "#" }
            ]}
          />

          {/* Quick Links */}
          <FooterSection 
            title="QUICK LINKS"
            links={[
              { text: "Tentang", href: "#" },
              { text: "Artikel", href: "#" },
              { text: "Blog", href: "#" }
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
          <p>© Copyright 2024 TajaMentawai. All Rights Reserved | Design by <strong>Team Arunasita</strong></p>
        </div>
      </footer>
		</>
	);
};

export default informasiKontak;