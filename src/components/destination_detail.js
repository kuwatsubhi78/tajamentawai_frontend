import React from 'react';
import './detaildestination.css';

const DetailDestination = ()=>{
	return (
		<>
			<header style={{background:'white'}}>
				<div class="container d-flex gap-5  align-items-center">
					<div class="icon">
						<img src="/green-left-arrow.webp"/>
					</div>
					<div class="line"></div>
				</div>
			</header>
			<div class="container mb-5 d-flex gap-5 justify-content-between">
				<div class="col-5">
					<div class="mb-5">
						<div style={{fontSize:'32px',fontWeight:'bold',marginBottom:'10px'}}>Taman Nasional Siberut</div>
						<div style={{fontSize:'13px'}} class="d-flex gap-2">
							<img src="/map.webp" style={{width:'28px',height:'28px',objectFit:'cover'}}/>
							<div>
								MVMQ+2M3, Bojakan, Kec. Siberut Utara, Kabupaten<br/>Kepulauan Mentawai, 
								Sumatera Barat 25394
							</div>
						</div>
					</div>
					<div class="mb-5">
						<div style={{fontSize:'24px',fontWeight:'bold',marginBottom:'10px'}}>Informasi Destinasi Wisata</div>
						<div>
							<div class="mb-3">
								Taman Nasional Siberut yang 65% kawasannya ditutupi oleh hutan primer Dipterocarpaceae, hutan primer campuran, rawa, hutan pantai, dan hutan mangrove. Konservasi di Pulau Siberut telah dimulai pada tahun 1976 dengan ditetapkannya kawasan Suaka Margasatwa Teitei Batti dengan luas 6.500 ha.
							</div>
							<div>
								Pada tahun 1981 United Nations Educational Scientifik and Cultural Organization (UNESCO) Pulau Siberut ditetapkan sebagai Cagar Biosfir di Indonesia. Saat ini, Taman Nasional Siberut dengan luas 190.500 yang merupakan gabungan dari kawasan suaka alam (132.900 ha), hutan lindung (3.500 ha), hutan produksi terbatas (36.600 ha) dan hutan produksi tetap (36.600 ha). 
							</div>
						</div>
					</div>
					<div class="mb-5">
						<div style={{fontSize:'24px',fontWeight:'bold',marginBottom:'10px'}}>Fasilitas Yang Tersedia</div>
						<div>
							<div class="d-flex gap-5">
								<div class="d-flex gap-2 align-items-end">
									<img style={{width:'32px',height:'32px'}} src="/toilet.webp" />
									<div>Toilet</div>
								</div>
								<div class="d-flex gap-2 align-items-end">
									<img style={{width:'32px',height:'32px'}} src="/penginapan.webp" />
									<div>Penginapan</div>
								</div>
							</div>
							<div class="d-flex gap-5 mt-3">
								<div class="d-flex gap-2 align-items-end">
									<img style={{width:'32px',height:'32px'}} src="/toilet.webp" />
									<div>Toilet</div>
								</div>
								<div class="d-flex gap-2 align-items-end">
									<img style={{width:'32px',height:'32px'}} src="/penginapan.webp" />
									<div>Penginapan</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div class="d-flex gap-2 align-items-center" style={{
							borderRadius:'20px',
							padding:'10px 15px',
							margin:'20px 0',
							border:'1px solid #D5FCED',
							background:'#D5FCED',
							fontWeight:'bold',
							cursor:'pointer'
						}}>
							<img src="/bookmark.png" style={{width:'24px'}} />
							<div>Simpan Destinasi</div>
						</div>
					</div>
					<div>
						<div style={{fontSize:'24px',fontWeight:'bold',marginBottom:'10px'}}>Ulasan dan Penilaian</div>
						<div class="d-flex gap-2">
							<img src="/star.webp" style={{width:'24px'}} />
							<div>4.6</div>
							<div>100 Ulasan</div>
						</div>
						<div class="mt-2">
							<a href="/destination/ulasan">Lihat detail ulasan</a>
						</div>
					</div>
				</div>
				<div class="col-6">
					<div>
						<img src="/taman-siberut.jpg" style={{width:'100%',borderRadius:'10px'}} />
					</div>
					<div class="d-flex gap-3 mt-3 mb-3">
						<div>
							<img src="/pulau-awera.jpg" style={{width:'100%',borderRadius:'10px'}} />
						</div>
						<div>
							<img src="/pulau-awera.jpg" style={{width:'100%',borderRadius:'10px'}} />
						</div>
					</div>
					<div>
						<img src="/pulau-sipora.jpg" style={{width:'100%',borderRadius:'10px'}} />
					</div>
				</div>
			</div>
		</>
	);
}

export default DetailDestination;