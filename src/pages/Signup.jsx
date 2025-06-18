import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppContext } from "../context/AppContext";

function Signup() {
  const {user , setuser , howUserLogin, setShowUserLogin} = useAppContext();
  const [loginInfo, setLoginInfo] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loginInfo.name || !loginInfo.email || !loginInfo.password || !loginInfo.phone) {
      toast.error("Please fill in all fields");
      return;
    }
    console.log(loginInfo)
    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/users/register", loginInfo, {
        headers: { "Content-Type": "application/json" },
      });

      toast.success("Signup successful! Redirecting...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-800">
      <div className="bg-gray-300 shadow-lg rounded-lg p-8 w-96 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Voyager</h2>
        <h3 className="text-lg font-semibold mb-4">Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={loginInfo.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Full Name"
          />
          <input
            type="email"
            name="email"
            value={loginInfo.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Email Address"
          />
          <input
            type="password"
            name="password"
            value={loginInfo.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Password"
          />
          <input
            type="tel"
            name="phone"
            value={loginInfo.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Phone Number"
          />
          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-2 rounded-md transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
          <p className="text-gray-600 text-sm mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 font-medium hover:underline">
              Log in
            </Link>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Signup;
