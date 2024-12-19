import React from "react";

const Dashboard = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        height: "100%",
        width: "100%",
        display: "flex",
        background: "whitesmoke",
      }}
    >
      <div
        style={{
          width: "15%",
          height: "100%",
          background: "blue",
          background: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{ padding: "20px", textAlign: "center", marginBottom: "10px" }}
        >
          <img src="/admin-icon.webp" style={{ height: "45px" }} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div>
            <a href="/admin" style={{ textDecoration: "none", color: "black" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  borderLeft: "5px solid #084360",
                  marginBottom: "3px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    background: "#084360",
                    alignItems: "center",
                    padding: "10px",
                    width: "85%",
                    borderRadius: "10px",
                    color: "white",
                  }}
                >
                  <img src="/dashboard.png" style={{ width: "24px" }} />
                  <div>Dashboard</div>
                </div>
              </div>
            </a>
            <a
              href="/admin/destination"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  borderLeft: "5px solid white",
                  marginBottom: "3px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    padding: "10px",
                    width: "85%",
                    borderRadius: "10px",
                  }}
                >
                  <img src="/destinasi.png" style={{ width: "24px" }} />
                  <div>Destinasi</div>
                </div>
              </div>
            </a>
            <a
              href="/admin/artikel"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  borderLeft: "5px solid white",
                  marginBottom: "3px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    padding: "10px",
                    width: "85%",
                    borderRadius: "10px",
                  }}
                >
                  <img src="/artikel.png" style={{ width: "24px" }} />
                  <div>Artikel</div>
                </div>
              </div>
            </a>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                borderLeft: "5px solid white",
                marginBottom: "3px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  padding: "10px",
                  width: "85%",
                  borderRadius: "10px",
                }}
              >
                <img src="/pengaturan.png" style={{ width: "24px" }} />
                <div>Pengaturan</div>
              </div>
            </div>
            <a
              href="/admin/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  borderLeft: "5px solid white",
                  marginBottom: "3px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    padding: "10px",
                    width: "85%",
                    borderRadius: "10px",
                  }}
                >
                  <img src="/logout.png" style={{ width: "24px" }} />
                  <div>Keluar</div>
                </div>
              </div>
            </a>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                borderLeft: "5px solid white",
                marginBottom: "3px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  padding: "10px",
                  width: "85%",
                  borderRadius: "10px",
                  fontSize: "12px",
                }}
              >
                <div>© Arunasita Team 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "blue",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "84px",
            background: "white",
            display: "flex",
            padding: "0 40px",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "30%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              placeholder="Cari..."
              style={{ borderRadius: "30px 0 0 30px", borderRight: "0" }}
            />
            <div
              style={{
                border: "1px solid gainsboro",
                padding: "9px 15px",
                borderLeft: "0",
                borderRadius: "0 30px 30px 0",
              }}
            >
              <img src="/findicon.png" style={{ width: "24px" }} />
            </div>
          </div>
          <div class="d-flex gap-4 align-items-center">
            <div>
              <img src="/notification.webp" style={{ width: "24px" }} />
            </div>
            <div class="d-flex gap-2 align-items-center">
              <div>
                <img src="/profile.webp" style={{ width: "32px" }} />
              </div>
              <div style={{ marginRight: "10px" }}>
                <div>
                  <b>Arunasita</b>
                </div>
                <div style={{ fontSize: "11px" }}>Admin</div>
              </div>
              <div>
                <img src="/arrow_down.webp" style={{ width: "24px" }} />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "whitesmoke",
            overflow: "auto",
            padding: "40px",
          }}
        >
          <div class="d-flex justify-content-between">
            <div
              style={{
                width: "400px",
                background: "white",
                padding: "20px 30px",
                borderRadius: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div>Total User</div>
                  <div style={{ fontSize: "24px" }}>
                    <b>40,689</b>
                  </div>
                </div>
                <div>
                  <img
                    src="/dashboard_user_icon.png"
                    style={{ width: "64px" }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  fontWeight: "bold",
                  marginTop: "20px",
                  alignItems: "center",
                }}
              >
                <div>
                  <img src="/up_dashboard_icon.png" style={{ width: "32px" }} />
                </div>
                <div>8.5 %</div>
                Up From Yesterday
              </div>
            </div>
            <div
              style={{
                width: "400px",
                background: "white",
                padding: "20px 30px",
                borderRadius: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div>Total Order</div>
                  <div style={{ fontSize: "24px" }}>
                    <b>10,293</b>
                  </div>
                </div>
                <div>
                  <img
                    src="/dashboard_yellow_icon.png"
                    style={{ width: "64px" }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  fontWeight: "bold",
                  marginTop: "20px",
                  alignItems: "center",
                }}
              >
                <div>
                  <img src="/up_dashboard_icon.png" style={{ width: "32px" }} />
                </div>
                <div>1.3 %</div>
                Up From Yesterday
              </div>
            </div>
            <div
              style={{
                width: "400px",
                background: "white",
                padding: "20px 30px",
                borderRadius: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div>Total Sales</div>
                  <div style={{ fontSize: "24px" }}>
                    <b>$89,000</b>
                  </div>
                </div>
                <div>
                  <img
                    src="/dashboard_purple_icon.png"
                    style={{ width: "64px" }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  fontWeight: "bold",
                  marginTop: "20px",
                  alignItems: "center",
                }}
              >
                <div>
                  <img
                    src="/dashboard_down_icon.png"
                    style={{ width: "32px" }}
                  />
                </div>
                <div>4.3 %</div>
                Up From Yesterday
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
