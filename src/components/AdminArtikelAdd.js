import React,{useState} from 'react';
import { ImageIcon, XCircle, Save } from 'lucide-react';

const Dashboard = ()=>{

  const [formData, setFormData] = useState({
    destinasi: '',
    fasilitas: '',
    deskripsi: '',
    gambar: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div style={{
      position:'fixed',
      top:'0',height:'100%',
      width:'100%',
      display:'flex',background:'whitesmoke'
    }}>
      <div style={{
        width:'15%',
        height:'100%',background:'blue',background:'white',display:'flex',flexDirection:'column'
      }}>
        <div style={{padding:'20px',textAlign:'center',marginBottom:'10px'}}>
          <img src="/admin-icon.webp" style={{height:'45px'}}/>
        </div>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%'}}>
          <div>
            <div style={{
              display:'flex',justifyContent:'center',borderLeft:'5px solid white',marginBottom:'3px'
            }}>
              <div style={{
                display:"flex",gap:'5px',
                alignItems:'center',padding:'10px',width:'85%',
                borderRadius:'10px',
              }}>
                <img src="/dashboard_black_icon.png" style={{width:'24px'}}/>
                <div>Dashboard</div>
              </div>
            </div>
            <div style={{
              display:'flex',justifyContent:'center',borderLeft:'5px solid white',marginBottom:'3px'
            }}>
              <div style={{
                display:"flex",gap:'5px',
                alignItems:'center',padding:'10px',width:'85%',
                borderRadius:'10px',
              }}>
                <img src="/destinasi.png" style={{width:'24px'}}/>
                <div>Destinasi</div>
              </div>
            </div>
            <div style={{
              display:'flex',justifyContent:'center',borderLeft:'5px solid #084360',marginBottom:'3px'
            }}>
              <div style={{
                display:"flex",gap:'5px',background:'#084360',
                alignItems:'center',padding:'10px',width:'85%',
                borderRadius:'10px',color:'white'
              }}>
                <img src="/artikel_white_icon.png" style={{width:'24px'}}/>
                <div>Artikel</div>
              </div>
            </div>
          </div>
          <div>
            <div style={{
              display:'flex',justifyContent:'center',borderLeft:'5px solid white',marginBottom:'3px'
            }}>
              <div style={{
                display:"flex",gap:'5px',
                alignItems:'center',padding:'10px',width:'85%',
                borderRadius:'10px'
              }}>
                <img src="/pengaturan.png" style={{width:'24px'}}/>
                <div>Pengaturan</div>
              </div>
            </div>
            <div style={{
              display:'flex',justifyContent:'center',borderLeft:'5px solid white',marginBottom:'3px'
            }}>
              <div style={{
                display:"flex",gap:'5px',
                alignItems:'center',padding:'10px',width:'85%',
                borderRadius:'10px'
              }}>
                <img src="/logout.png" style={{width:'24px'}}/>
                <div>Keluar</div>
              </div>
            </div>
            <div style={{
              display:'flex',justifyContent:'center',borderLeft:'5px solid white',marginBottom:'3px'
            }}>
              <div style={{
                display:"flex",gap:'5px',
                alignItems:'center',padding:'10px',width:'85%',
                borderRadius:'10px',fontSize:'12px'
              }}>
                <div>© Arunasita Team 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        width:'100%',
        height:'100%',
        background:'blue',
        display:'flex',flexDirection:'column'
      }}>
        <div style={{
          width:'100%',
          height:'84px',background:'white',
          display:'flex',padding:'0 40px',justifyContent:'space-between'
        }}>
          <div style={{
            width:'30%',display:'flex',alignItems:'center'
          }}>
            <input placeholder="Cari..." style={{borderRadius:'30px 0 0 30px',borderRight:'0'}}/>
            <div style={{border:'1px solid gainsboro',padding:'9px 15px',borderLeft:'0',borderRadius:'0 30px 30px 0'}}>
              <img src="/findicon.png" style={{width:'24px'}}/>
            </div>
          </div>
          <div class="d-flex gap-4 align-items-center">
            <div>
              <img src="/notification.webp" style={{width:'24px'}}/>
            </div>
            <div class="d-flex gap-2 align-items-center">
              <div>
                <img src="/profile.webp" style={{width:'32px'}}/>
              </div>
              <div style={{marginRight:'10px'}}>
                <div><b>Arunasita</b></div>
                <div style={{fontSize:'11px'}}>Admin</div>
              </div>
              <div>
                <img src="/arrow_down.webp" style={{width:'24px'}}/>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          width:'100%',
          height:'100%',background:'whitesmoke',overflow:'auto',padding:'40px'
        }}>
          <div className="container py-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="card-title mb-0">Tambah Artikel</h3>
                  <div className="d-flex gap-2">
                    <a href="/admin/artikel" style={{textDecoration:'none'}}>
                      <button className="btn btn-danger d-flex align-items-center gap-2">
                        <XCircle size={20} />
                        Batal
                      </button>
                    </a>
                    <button className="btn btn-success d-flex align-items-center gap-2">
                      <Save size={20} />
                      Simpan
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    {/* Left Column */}
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label fw-semibold">Judul</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Masukkan Nama Destinasi"
                          value={formData.destinasi}
                          onChange={(e) => setFormData({...formData, destinasi: e.target.value})}
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label fw-semibold">Penulis</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Masukkan Nama Destinasi"
                          value={formData.destinasi}
                          onChange={(e) => setFormData({...formData, destinasi: e.target.value})}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-semibold">Tags</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Pilih Fasilitas"
                          value={formData.fasilitas}
                          onChange={(e) => setFormData({...formData, fasilitas: e.target.value})}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-semibold">Upload Files</label>
                        <input
                          type="file"
                          className="form-control"
                          placeholder="Pilih Fasilitas"
                          value={formData.fasilitas}
                          onChange={(e) => setFormData({...formData, fasilitas: e.target.value})}
                        />
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label fw-semibold">Gambar</label>
                        <div 
                          className="border border-2 border-dashed rounded p-4 text-center position-relative d-flex align-items-center justify-content-center"
                          style={{ minHeight: '250px' }}
                        >
                          {!formData.gambar ? (
                            <div className="d-flex flex-column align-items-center justify-content-center h-100">
                              <ImageIcon size={48} className="text-secondary mb-2" />
                              <p className="text-secondary mb-0">+ Tambahkan Gambar</p>
                            </div>
                          ) : (
                            <img
                              src={URL.createObjectURL(formData.gambar)}
                              alt="Preview"
                              className="img-fluid"
                              style={{ maxHeight: '230px', objectFit: 'contain' }}
                            />
                          )}
                          <input
                            type="file"
                            className="position-absolute top-0 start-0 opacity-0 w-100 h-100"
                            accept="image/*"
                            onChange={(e) => setFormData({...formData, gambar: e.target.files[0]})}
                            style={{ cursor: 'pointer' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;