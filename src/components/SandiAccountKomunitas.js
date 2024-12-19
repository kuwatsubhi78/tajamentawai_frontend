import React from 'react';
import './infowisatawan.css';

const SandiAccountKomunitas = ()=>{
	return (
		<div>
			<header>
				<div class="container d-flex justify-content-between align-items-center" style={{color:'white'}}>
					<div>
						<div style={{fontSize:'20px',fontWeight:'bold'}}>TAJAMENTAWAI</div>
						<div>Jelajahi setiap sudut mentawai</div>
					</div>
					<div class="d-flex justify-content-between align-items-center gap-3">
						<div>
							<input placeholder="Cari di komunitas..." style={{borderRadius:'25px'}} />
						</div>
						<div>
							<div style={{width:'26px',height:'26px',borderRadius:'50%',overflow:'hidden'}}>
								<img src="/notification.png" style={{width:'100%',height:'100%',objectFit:'cover'}} />
							</div>
						</div>
						<div class="d-flex justify-content-between align-items-center gap-3">
							<div style={{width:'48px',height:'48px',borderRadius:'50%',overflow:'hidden'}}>
								<img src="/profile.webp" style={{width:'100%',height:'100%',objectFit:'cover'}} />
							</div>
							<div style={{width:'24px',height:'24px',borderRadius:'50%',overflow:'hidden'}}>
								<img src="/arrow_down.png" style={{width:'100%',height:'100%',objectFit:'cover'}} />
							</div>
						</div>
					</div>
				</div>
			</header>
			<div class="container d-flex" style={{gap:'70px',marginTop:'100px',marginBottom:'100px'}}>
				<div class="col-3">
					<div>
						<div class="title">Pengaturan Akun</div>
						<div class="bg-white rounded">
							<a href="/komunitas/settings" style={{textDecoration:'none',color:'black'}}>
								<div class="d-flex gap-2 align-item-center p-3" style={{cursor:'pointer'}}>
									<div class="icon-small">
										<img src="/user.png" />
									</div>
									<div>Info Wisatawan</div>
								</div>
							</a>
							<a href="/komunitas/kontak" style={{textDecoration:'none',color:'black'}}>
								<div class="d-flex gap-2 align-item-center p-3" style={{cursor:'pointer'}}>
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
							<div class="d-flex gap-2 align-item-center p-3" style={{cursor:'pointer'}}>
								<div class="icon-small">
									<img src="/secure.webp" />
								</div>
								<div>Ubah Kata Sandi</div>
							</div>
						</div>
					</div>
				</div>
				<div style={{width:'100%',background:'white',border:'1px solid gainsboro',borderRadius:'20px'}}>
					<div style={{padding:'30px'}}>
						<div >
							<div class="title normal-font">Kata Sandi Lama</div>
							<div>
								<input type="password" name="old_password" id="old_password" placeholder="Masukin Password Lama..."/>
							</div>
						</div>
						<div class="mt-3">
							<div class="title normal-font">Kata Sandi Baru</div>
							<div>
								<input name="password" id="password" placeholder="Masukan Password Baru..."/>
							</div>
						</div>
						<div class="mt-3">
							<div class="title normal-font">Ulangi Kata Sandi Baru</div>
							<div>
								<input name="confirmation_password" id="confirmation_password" placeholder="Konfirmasi Password Baru..."/>
							</div>
						</div>
						<div class="mt-3 d-flex justify-content-center">
							<button>Simpan</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SandiAccountKomunitas;