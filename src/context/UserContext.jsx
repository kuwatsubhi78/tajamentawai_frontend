import { createContext, useContext } from "react";

// Membuat Context
export const UserContext = createContext();

// Custom hook untuk menggunakan context
export const useUser = () => useContext(UserContext);
