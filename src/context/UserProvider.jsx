import { useState, useEffect, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { UserContext } from "./UserContext";
import { useLocation, useNavigate } from "react-router-dom";

const UserProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [profilData, setProfilData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const hasFetchedRef = useRef(false); // Menyimpan status apakah fetching sudah dilakukan

  const fetchProfile = useCallback(async () => {
    // Cegah fetching di halaman login
    if (location.pathname === "/login" || hasFetchedRef.current) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/users/me`, {
        withCredentials: true,
      });
      setProfilData(response.data);
      setError("");
      hasFetchedRef.current = true; // Tandai bahwa fetching sudah dilakukan
    } catch (err) {
      if (err.response?.status === 403) {
        setProfilData(null);
      }
      setError(err.response?.data?.message || "Failed to fetch profile");
    } finally {
      setLoading(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  useEffect(() => {
    if (!profilData && !loading && location.pathname !== "/login") {
      navigate("/login");
    }
  }, [profilData, loading, location, navigate]);

  useEffect(() => {
    if (location.pathname === "/login") {
      setProfilData(null);
    }
  }, [location.pathname]);

  return (
    <UserContext.Provider
      value={{
        profilData,
        setProfilData,
        loading,
        setLoading,
        error,
        setError,
        fetchProfile,
      }}
    >
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        children
      )}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
