import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("token") || null);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [createCom, setCreateCom] = useState(false);
  const [location, setLocation] = useState({});
  const [address, setAddress] = useState();
  const [currentcity, setCurrentcity] = useState();
  const [userDetails, setUserDetails] = useState(null);
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/login");
  };
  
  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        showUserLogin,
        setShowUserLogin,
        logout,
        profileOpen,
        setProfileOpen,
        sidebarOpen,
        setSidebarOpen,
        createCom,
        setCreateCom,
        location,
        setLocation,
        address,
        setAddress,
        currentcity,
        setCurrentcity,
        userDetails,
        setUserDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
